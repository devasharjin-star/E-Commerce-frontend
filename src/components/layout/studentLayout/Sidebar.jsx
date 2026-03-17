import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition
     ${
       isActive
         ? "bg-indigo-600 text-white shadow"
         : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
     }`;

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <>
      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <h2 className="font-bold text-lg">Student Panel</h2>

        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* 🔹 Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`
        fixed z-50 top-0 left-0 h-full w-64
        bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        p-6 flex flex-col
        transform transition-transform duration-300

        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        `}
      >
        {/* Close button (mobile) */}
        <div className="flex items-center justify-between md:hidden mb-6">
          <h2 className="text-lg font-bold">Student Panel</h2>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* 🔹 Logo / Title */}
        <h2 className="hidden md:block text-xl font-bold mb-8">
          🎓 Student Panel
        </h2>

        {/* 🔹 Navigation */}
        <nav className="space-y-2">
          <NavLink to="/student/profile" className={linkStyle}>
            Profile
          </NavLink>

          <NavLink to="/student/academics" className={linkStyle}>
            Academic Overview
          </NavLink>

          <NavLink to="/student/timetable" className={linkStyle}>
            Timetable
          </NavLink>

          <NavLink to="/student/assignments" className={linkStyle}>
            Assignments
          </NavLink>

          <NavLink to="/student/attendance" className={linkStyle}>
            Attendance
          </NavLink>

          <NavLink to="/student/fees" className={linkStyle}>
            Fees
          </NavLink>

          <NavLink to="/student/announcements" className={linkStyle}>
            Announcements
          </NavLink>
        </nav>

        {/* 🔹 Logout */}
        <button
          onClick={handleLogout}
          className="
          mt-auto flex items-center justify-center gap-2
          px-4 py-2 rounded-lg
          bg-red-500 text-white
          hover:bg-red-600
          transition text-sm font-medium
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;