import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "../Topbar";

const StudDashLayout = () => {
  return (
    <div
      className="
      flex min-h-screen
      bg-gray-100 text-gray-800
      dark:bg-gray-900 dark:text-gray-200
      "
    >
      {/* ⭐ Sidebar */}
      <Sidebar />

      {/* ⭐ Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64">

        {/* ⭐ Sticky Topbar */}
        <div className="sticky top-0 z-30">
          <Topbar />
        </div>

        {/* ⭐ Page Content */}
        <main
          className="
          flex-1
          p-4 sm:p-6 lg:p-8
          max-w-7xl mx-auto w-full
          "
        >
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default StudDashLayout;