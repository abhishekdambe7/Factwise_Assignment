import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../styles/DataGrid.scss';
import type { Employee } from '../data/sampleData';
import { useMemo } from 'react';

interface DataGridProps {
  rowData: Employee[];
  columnDefs: ColDef<Employee>[];
}

const DataGrid = ({ rowData, columnDefs }: DataGridProps): React.JSX.Element => {
  const defaultColDef = useMemo<ColDef<Employee>>(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
      minWidth: 100
    }),
    []
  );

  return (
    <div className="data-grid-container">
      <div className="ag-theme-alpine custom-grid">
        <AgGridReact<Employee>
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50]}
          paginationAutoPageSize={false}
          animateRows={true}
          rowHeight={50}
          headerHeight={45}
          suppressCellFocus={true}
          domLayout="normal"
        />
      </div>
    </div>
  );
};

export default DataGrid;

