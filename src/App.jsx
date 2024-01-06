import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Submenu from './components/Submenu';

import { useGlobalContext } from './context/context';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
