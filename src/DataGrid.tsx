import * as React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';



export interface Column {
  key: string;
  header: string;
  width?: number;
  sortable?: boolean;
}

export interface DataGridProps {
  rows: Record<string, string | number>[];
  columns: Column[];
  height?: number;
  rowHeight?: number;
  sortable?: boolean;
  selectable?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: Record<string, string | number>, index: number) => void;
  onSelectionChange?: (selectedRows: Record<string, string | number>[]) => void;
}

interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

const DataGrid: React.FC<DataGridProps> = ({
  rows,
  columns,
  height = 400,
  rowHeight = 40,
  sortable = false,
  selectable = false,
  loading = false,
  emptyMessage = 'No data available',
  onRowClick,
  onSelectionChange,
}: DataGridProps) => {

  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  // Handle sorting
  const handleSort = useCallback((key: string) => {
    if (!sortable) return;
    
    setSortConfig((current) => {
      if (current?.key === key) {
        return {
          key,
          direction: current.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  }, [sortable]);

  // Sort rows
  const sortedRows = useMemo(() => {
    if (!sortConfig) return rows;

    return [...rows].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [rows, sortConfig]);

  // Virtualization calculations
  const totalHeight = sortedRows.length * rowHeight;
  const viewportHeight = height - rowHeight; // Subtract header height
  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(viewportHeight / rowHeight) + 1,
    sortedRows.length
  );
  const visibleRows = sortedRows.slice(startIndex, endIndex);
  const offsetY = startIndex * rowHeight;

  // Handle scroll
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  // Handle row selection
  const handleRowSelect = useCallback((index: number, event: React.MouseEvent) => {
    if (!selectable) return;

    event.stopPropagation();
    
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      
      // Notify parent of selection change
      if (onSelectionChange) {
        const selectedData = Array.from(newSet).map((idx) => sortedRows[idx]);
        onSelectionChange(selectedData);
      }
      
      return newSet;
    });
  }, [selectable, sortedRows, onSelectionChange]);

  // Handle select all
  const handleSelectAll = useCallback(() => {
    if (!selectable) return;

    setSelectAll((prev: boolean) => {
      const newSelectAll = !prev;
      
      if (newSelectAll) {
        const allIndices = new Set<number>(sortedRows.map((_: Record<string, string | number>, index: number) => index));
        setSelectedRows(allIndices);
        if (onSelectionChange) {
          onSelectionChange(sortedRows);
        }
      } else {
        setSelectedRows(new Set<number>());
        if (onSelectionChange) {
          onSelectionChange([]);
        }
      }
      
      return newSelectAll;
    });
  }, [selectable, sortedRows, onSelectionChange]);


  // Handle row click
  const handleRowClick = useCallback((row: Record<string, string | number>, index: number) => {
    if (onRowClick) {
      onRowClick(row, index);
    }
  }, [onRowClick]);

  // Get sort indicator
  const getSortIndicator = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) return '⇅';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  // Calculate column widths
  const defaultColumnWidth = 150;
  const totalWidth = columns.reduce((sum: number, col: Column) => sum + (col.width || defaultColumnWidth), 0);


  if (loading) {
    return (
      <div 
        style={{ 
          height: `${height}px`, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          backgroundColor: '#fafafa'
        }}
        role="status"
        aria-live="polite"
      >
        <div>Loading...</div>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div 
        style={{ 
          height: `${height}px`, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          backgroundColor: '#fafafa',
          color: '#666'
        }}
        role="status"
        aria-live="polite"
      >
        <div>{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: `${height}px`,
        overflow: 'auto',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        backgroundColor: '#fff',
      }}
      onScroll={handleScroll}
      role="region"
      aria-label="Data Grid"
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          position: 'sticky',
          top: 0,
          backgroundColor: '#f5f5f5',
          borderBottom: '2px solid #e0e0e0',
          zIndex: 10,
          minWidth: `${totalWidth}px`,
        }}
        role="row"
        aria-label="Header"
      >
        {selectable && (
          <div
            style={{
              width: '40px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: '1px solid #e0e0e0',
            }}
          >
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              aria-label="Select all rows"
            />
          </div>
        )}
        {columns.map((col: Column) => (
          <div
            key={col.key}
            style={{
              width: col.width || defaultColumnWidth,
              padding: '8px',
              fontWeight: 'bold',
              borderRight: '1px solid #e0e0e0',
              cursor: sortable || col.sortable ? 'pointer' : 'default',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onClick={() => handleSort(col.key)}
            role="columnheader"
            aria-sort={sortConfig?.key === col.key ? (sortConfig!.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
          >

            <span>{col.header}</span>
            {(sortable || col.sortable) && (
              <span style={{ marginLeft: '4px', fontSize: '12px' }}>
                {getSortIndicator(col.key)}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Virtualized Rows */}
      <div style={{ height: `${totalHeight}px`, position: 'relative', minWidth: `${totalWidth}px` }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleRows.map((row: Record<string, string | number>, visibleIndex: number) => {
            const actualIndex = startIndex + visibleIndex;
            const isSelected = selectedRows.has(actualIndex);
            
            return (
              <div
                key={actualIndex}
                style={{
                  display: 'flex',
                  height: `${rowHeight}px`,
                  borderBottom: '1px solid #f0f0f0',
                  backgroundColor: isSelected ? '#e3f2fd' : visibleIndex % 2 === 0 ? '#fff' : '#fafafa',
                  cursor: onRowClick ? 'pointer' : 'default',
                }}
                onClick={() => handleRowClick(row, actualIndex)}
                role="row"
                aria-selected={isSelected}
              >
                {selectable && (
                  <div
                    style={{
                      width: '40px',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRight: '1px solid #f0f0f0',
                    }}
                    onClick={(e: React.MouseEvent) => handleRowSelect(actualIndex, e)}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}} // Handled by parent click
                      aria-label={`Select row ${actualIndex + 1}`}
                    />
                  </div>
                )}
                {columns.map((col: Column) => (

                  <div
                    key={col.key}
                    style={{
                      width: col.width || defaultColumnWidth,
                      padding: '8px',
                      borderRight: '1px solid #f0f0f0',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    role="cell"
                  >
                    {row[col.key]}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
