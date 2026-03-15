import Sidebar from "../components/layout/facultyLayout/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const FacultyLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <Outlet />
      </div>

    </div>
  );
};

export default FacultyLayout;