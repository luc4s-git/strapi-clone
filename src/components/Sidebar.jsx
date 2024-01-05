import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';
import subLinks from '../data';

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const subLinksMapping = subLinks.map((item) => {
    const { pageId, page, links } = item;
    return (
      <article key={pageId}>
        <h4>{page}</h4>
        <div className="sidebar-sublinks">
          {links.map((link) => {
            const { id, url, icon, label } = link;
            return (
              <a key={id} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </article>
    );
  });

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">{subLinksMapping}</div>
      </div>
    </aside>
  );
}
