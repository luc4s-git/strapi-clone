import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const closeSidebar = () => {
  setIsSidebarOpen(false);
};

const openSidebar = () => {
  setIsSidebarOpen(true);
};

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, closeSidebar, openSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
