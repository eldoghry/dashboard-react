import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Sidebar />
      {children}
    </>
  );
}

export default Layout;
