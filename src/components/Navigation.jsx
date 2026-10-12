import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `nav-link${isActive ? ' nav-link--active' : ''}`;

function Navigation() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Catatan Pribadi
        </NavLink>

        <nav className="navbar__nav">
          <NavLink to="/" end className={navLinkClass}>
            Catatan Aktif
          </NavLink>
          <NavLink to="/archived" className={navLinkClass}>
            Arsip
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;