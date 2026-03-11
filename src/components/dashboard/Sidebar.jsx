import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition
     ${
       isActive
         ? "bg-blue-500 text-white"
         : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
     }`;

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // or your token name
    localStorage.removeItem("role"); // or your token name
    window.location.href = "/";
  };

  return (
    <div
      className="
      fixed
      top-0
      left-0
      h-screen
      w-64
      bg-white
      text-gray-800
      p-6
      border-r border-gray-200
      hidden md:flex
      flex-col

      dark:bg-gray-900
      dark:text-gray-200
      dark:border-gray-700
      "
    >
      <div>
        <h2 className="text-xl font-bold mb-6">Student Panel</h2>

        <nav className="space-y-2 text-sm">
          <NavLink to="/student/profile" className={linkStyle}>Profile</NavLink>
          <NavLink to="/student/academics" className={linkStyle}>Academic Overview</NavLink>
          <NavLink to="/student/timetable" className={linkStyle}>Timetable</NavLink>
          <NavLink to="/student/assignments" className={linkStyle}>Assignments</NavLink>
          <NavLink to="/student/attendance" className={linkStyle}>Attendance</NavLink>
          <NavLink to="/student/fees" className={linkStyle}>Fees</NavLink>
          <NavLink to="/student/announcements" className={linkStyle}>Announcements</NavLink>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="mt-auto px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;