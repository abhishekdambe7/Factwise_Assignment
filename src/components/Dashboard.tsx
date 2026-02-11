import { useMemo } from 'react';
import type { ColDef, ICellRendererParams } from 'ag-grid-community';
import Header from './Header';
import DataGrid from './DataGrid';
import { sampleData, type Employee } from '../data/sampleData';
import '../styles/Dashboard.scss';
import '../styles/DataGrid.scss'; // Needed for status-active and status-inactive classes

const StatusRenderer = (params: ICellRendererParams<Employee>): React.JSX.Element => {
  const value = params.value as Employee['status'];
  const className = value === 'Active' ? 'status-active' : 'status-inactive';
  return <span className={className}>{value}</span>;
};

const Dashboard = (): React.JSX.Element => {
  const rowData = useMemo<Employee[]>(() => sampleData, []);

  const columnDefs = useMemo<ColDef<Employee>[]>(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        width: 80,
        sortable: true,
        filter: true,
        resizable: true,
        pinned: 'left',
        lockPosition: true
      },
      {
        field: 'name',
        headerName: 'Name',
        width: 180,
        sortable: true,
        filter: true,
        resizable: true
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 220,
        sortable: true,
        filter: true,
        resizable: true
      },
      {
        field: 'department',
        headerName: 'Department',
        width: 150,
        sortable: true,
        filter: true,
        resizable: true
      },
      {
        field: 'role',
        headerName: 'Role',
        width: 180,
        sortable: true,
        filter: true,
        resizable: true
      },
      {
        field: 'salary',
        headerName: 'Salary',
        width: 130,
        sortable: true,
        filter: 'agNumberColumnFilter',
        resizable: true,
        valueFormatter: (params) => {
          if (params.value == null) return '';
          return `$${params.value.toLocaleString()}`;
        }
      },
      {
        field: 'joinDate',
        headerName: 'Join Date',
        width: 140,
        sortable: true,
        filter: 'agDateColumnFilter',
        resizable: true,
        valueFormatter: (params) => {
          if (!params.value) return '';
          const date = new Date(params.value);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
        }
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 120,
        cellRenderer: StatusRenderer
      },
      {
        field: 'location',
        headerName: 'Location',
        width: 180,
        sortable: true,
        filter: true,
        resizable: true
      }
    ],
    []
  );

  return (
    <div className="dashboard">
      <Header />
      <main className="dashboard-content">
        <DataGrid rowData={rowData} columnDefs={columnDefs} />
      </main>
    </div>
  );
};

export default Dashboard;

