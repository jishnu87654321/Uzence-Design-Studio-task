import type { Meta, StoryObj } from '@storybook/react';
import DataGrid from './DataGrid';

const meta: Meta<typeof DataGrid> = {
  component: DataGrid,
  title: 'Components/DataGrid',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

// Sample data generators
const generateColumns = () => [
  { key: 'id', header: 'ID', width: 80 },
  { key: 'name', header: 'Name', width: 200 },
  { key: 'email', header: 'Email', width: 250 },
  { key: 'role', header: 'Role', width: 150 },
  { key: 'department', header: 'Department', width: 180 },
  { key: 'status', header: 'Status', width: 120 },
];

const generateRows = (count: number) => 
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Editor' : 'Viewer',
    department: ['Engineering', 'Design', 'Marketing', 'Sales'][i % 4],
    status: i % 2 === 0 ? 'Active' : 'Inactive',
  }));

// Default story with basic configuration
export const Default: Story = {
  args: {
    columns: generateColumns(),
    rows: generateRows(100),
    height: 400,
    rowHeight: 40,
  },
};

// Large dataset with virtualization
export const LargeDataset: Story = {
  args: {
    columns: generateColumns(),
    rows: generateRows(10000),
    height: 600,
    rowHeight: 40,
  },
  parameters: {
    docs: {
      description: {
        story: 'DataGrid with 10,000 rows demonstrating virtualization performance.',
      },
    },
  },
};

// With sorting enabled
export const Sortable: Story = {
  args: {
    columns: generateColumns(),
    rows: generateRows(100),
    height: 400,
    sortable: true,
  },
};

// With row selection
export const Selectable: Story = {
  args: {
    columns: generateColumns(),
    rows: generateRows(100),
    height: 400,
    selectable: true,
  },
};

// Combined features
export const FullFeatured: Story = {
  args: {
    columns: generateColumns(),
    rows: generateRows(1000),
    height: 500,
    sortable: true,
    selectable: true,
    rowHeight: 40,
  },
};

// Loading state
export const Loading: Story = {
  args: {
    columns: generateColumns(),
    rows: [],
    height: 400,
    loading: true,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    columns: generateColumns(),
    rows: [],
    height: 400,
    emptyMessage: 'No users found',
  },
};

// Custom row height
export const CustomRowHeight: Story = {
  args: {
    columns: generateColumns(),
    rows: generateRows(50),
    height: 400,
    rowHeight: 60,
  },
};

// With click handler
export const WithRowClick: Story = {
  args: {
    columns: generateColumns(),
    rows: generateRows(50),
    height: 400,
    onRowClick: (row: Record<string, string | number>, index: number) => {
      alert(`Clicked row ${index + 1}: ${row.name}`);
    },
  },

  parameters: {
    docs: {
      description: {
        story: 'Click on any row to see the alert with row data.',
      },
    },
  },
};
