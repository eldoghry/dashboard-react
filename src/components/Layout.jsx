import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  // TODO: validate expired token
  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <Topbar />
      <Sidebar />
      <Outlet /> {/* instead of props.children, router dom v6  */}
    </>
  );
}

export default Layout;
