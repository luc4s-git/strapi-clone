import sublinks from '../data';
import { useGlobalContext } from '../context/context';

export default function NavLinks() {
  const { setPageId } = useGlobalContext();

  const subLinksMapping = sublinks.map((item) => {
    const { pageId, page } = item;
    return (
      <button
        className="nav-link"
        key={pageId}
        onMouseEnter={() => setPageId(pageId)}
      >
        {page}
      </button>
    );
  });
  return <div className="nav-links">{subLinksMapping}</div>;
}
