import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "../Topbar";

const facultyDashLayout = () => {
  return (
    <div
      className="
        flex
        min-h-screen
        
        bg-gray-100 text-gray-800
        dark:bg-gray-900 dark:text-gray-100
      "
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col md:ml-64">

        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main
          className="
            flex-1
            p-6
            
            bg-gray-100
            dark:bg-gray-900
          "
        >
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default facultyDashLayout;