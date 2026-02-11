import { useMemo } from 'react';
import type { ColDef, ICellRendererParams } from 'ag-grid-community';
import Header from './Header';
import DataGrid from './DataGrid';
import { sampleData, type Employee } from '../data/sampleData';
import '../styles/Dashboard.scss';
import '../styles/DataGrid.scss'; // Needed for status-active and status-inactive classes

const StatusRenderer = (params: ICellRendererParams<Employee>): React.JSX.Element => {
  const isActive = params.value as boolean;
  const className = isActive ? 'status-active' : 'status-inactive';
  const text = isActive ? 'Active' : 'Inactive';
  return <span className={className}>{text}</span>;
};

const NameRenderer = (params: ICellRendererParams<Employee>): React.JSX.Element => {
  const employee = params.data;
  if (!employee) return <span></span>;
  return <span>{employee.firstName} {employee.lastName}</span>;
};

const SkillsRenderer = (params: ICellRendererParams<Employee>): React.JSX.Element => {
  const skills = params.value as string[];
  if (!skills || skills.length === 0) return <span>-</span>;
  return <span>{skills.join(', ')}</span>;
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
        headerName: 'Name',
        width: 180,
        sortable: true,
        filter: true,
        resizable: true,
        cellRenderer: NameRenderer,
        valueGetter: (params) => {
          if (!params.data) return '';
          return `${params.data.firstName} ${params.data.lastName}`.trim();
        },
        comparator: (valueA, valueB, nodeA, nodeB) => {
          const nameA = `${nodeA?.data?.firstName || ''} ${nodeA?.data?.lastName || ''}`.trim();
          const nameB = `${nodeB?.data?.firstName || ''} ${nodeB?.data?.lastName || ''}`.trim();
          return nameA.localeCompare(nameB);
        }
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
        field: 'position',
        headerName: 'Position',
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
        field: 'hireDate',
        headerName: 'Hire Date',
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
        field: 'age',
        headerName: 'Age',
        width: 100,
        sortable: true,
        filter: 'agNumberColumnFilter',
        resizable: true
      },
      {
        field: 'location',
        headerName: 'Location',
        width: 150,
        sortable: true,
        filter: true,
        resizable: true
      },
      {
        field: 'performanceRating',
        headerName: 'Performance',
        width: 130,
        sortable: true,
        filter: 'agNumberColumnFilter',
        resizable: true,
        valueFormatter: (params) => {
          if (params.value == null) return '';
          return params.value.toFixed(1);
        }
      },
      {
        field: 'projectsCompleted',
        headerName: 'Projects',
        width: 110,
        sortable: true,
        filter: 'agNumberColumnFilter',
        resizable: true
      },
      {
        field: 'isActive',
        headerName: 'Status',
        width: 120,
        cellRenderer: StatusRenderer,
        filter: 'agSetColumnFilter',
        filterParams: {
          values: [true, false]
        }
      },
      {
        field: 'skills',
        headerName: 'Skills',
        width: 250,
        sortable: false,
        filter: true,
        resizable: true,
        cellRenderer: SkillsRenderer
      },
      {
        field: 'manager',
        headerName: 'Manager',
        width: 180,
        sortable: true,
        filter: true,
        resizable: true,
        valueFormatter: (params) => {
          return params.value || '-';
        }
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

