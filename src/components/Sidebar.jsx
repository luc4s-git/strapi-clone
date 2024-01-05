import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';
import subLinks from '../data';

export default function Sidebar() {
  const { closeSidebar } = useGlobalContext();

  const subLinksMapping = subLinks.map((link) => {
    return (
      <div key={link.pageId}>
        <h4>{link.page}</h4>
        <ul>
          {link.links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>
                  {link.icon}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <button onClick={closeSidebar}>
        <FaTimes />
      </button>
      {subLinksMapping}
    </div>
  );
}
