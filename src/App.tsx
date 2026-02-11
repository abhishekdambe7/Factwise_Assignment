import { ClientSideRowModelModule, ModuleRegistry } from 'ag-grid-community';
import Dashboard from './components/Dashboard';

function App(): React.JSX.Element {
  ModuleRegistry.registerModules([ClientSideRowModelModule]);

  return <Dashboard />;
}

export default App;

