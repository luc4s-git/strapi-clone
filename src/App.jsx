import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { useGlobalContext } from './context/context';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <main>
      <Navbar />
      {isSidebarOpen && <Sidebar />}
    </main>
  );
};
export default App;
