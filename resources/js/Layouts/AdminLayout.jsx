import { useState } from "react";
import Sidebar from "@/Components/Admin/SideBar";
import Topbar from "@/Components/Admin/TopBar";

export default function MainAdminLayout({ children, pageName }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div
      id="wrapper"
      className={sidebarOpen ? "" : "sidebar-toggled"} // SB Admin 2 expects this
    >
      <Sidebar isOpen={sidebarOpen} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar toggleSidebar={toggleSidebar} />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">{pageName}</h1>
            </div>
            <div className="row">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
