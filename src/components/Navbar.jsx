import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

export default function Navbar() {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <h3 className="logo">strapi</h3>
      <button onClick={openSidebar}>
        <FaBars />
      </button>
    </nav>
  );
}
