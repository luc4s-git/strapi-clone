import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

export default function Navbar() {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button
          type="button"
          className="toggle-btn"
          onClick={openSidebar}
          aria-label="sidebar button"
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}
