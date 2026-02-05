import * as React from 'react';

import DataGrid from './DataGrid';
import './App.css';

const App: React.FC = () => {
  const columns = [
    { key: 'id', header: 'ID', width: 80 },
    { key: 'name', header: 'Name', width: 200 },
    { key: 'email', header: 'Email', width: 250 },
    { key: 'role', header: 'Role', width: 150 },
    { key: 'status', header: 'Status', width: 120 },
  ];

  const rows = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Editor' : 'Viewer',
    status: i % 2 === 0 ? 'Active' : 'Inactive',
  }));

  return (
    <div className="app">
      <header className="app-header">
        <h1>DataGrid Demo</h1>
        <p>Virtualized DataGrid with 10,000 rows</p>
      </header>
      <main className="app-main">
        <DataGrid
          columns={columns}
          rows={rows}
          height={600}
          sortable
          selectable
          rowHeight={40}
        />
      </main>
    </div>
  );
};

export default App;
