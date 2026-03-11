import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <div
      className="
      flex
      min-h-screen
      bg-gray-100
      text-gray-800

      dark:bg-gray-800
      dark:text-gray-200
      "
    >
      <Sidebar />

      <div className="flex-1 flex flex-col md:ml-64">
        <Topbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;