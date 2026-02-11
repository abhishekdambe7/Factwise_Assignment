import '../styles/Header.scss';

const Header = (): React.JSX.Element => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">Employee Dashboard</h1>
        <p className="app-subtitle">Manage and view employee information</p>
      </div>
    </header>
  );
};

export default Header;

