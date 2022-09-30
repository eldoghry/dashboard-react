import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Outlet /> {/* instead of props.children, router dom v6  */}
    </>
  );
}

export default Layout;
