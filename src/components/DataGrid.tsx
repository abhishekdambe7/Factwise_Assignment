import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../styles/DataGrid.scss';
import type { Employee } from '../data/sampleData';
import { useMemo, useRef, useEffect } from 'react';

interface DataGridProps {
  rowData: Employee[];
  columnDefs: ColDef<Employee>[];
}

const DataGrid = ({ rowData, columnDefs }: DataGridProps): React.JSX.Element => {
  const gridRef = useRef<AgGridReact<Employee>>(null);
  
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

  useEffect(() => {
    // Ensure grid resizes properly
    if (gridRef.current?.api) {
      gridRef.current.api.sizeColumnsToFit();
    }
  }, [rowData]);

  return (
    <div className="data-grid-container">
      <div className="ag-theme-alpine custom-grid">
        <AgGridReact<Employee>
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50, 100]}
          paginationAutoPageSize={false}
          animateRows={true}
          rowHeight={50}
          headerHeight={45}
          suppressCellFocus={true}
          domLayout="normal"
          suppressPaginationPanel={false}
          paginationNumberFormatter={(params) => {
            return params.value.toLocaleString();
          }}
        />
      </div>
    </div>
  );
};

export default DataGrid;

