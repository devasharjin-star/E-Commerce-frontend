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
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
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
        <h2 className="text-xl font-bold mb-6">Faculty Panel</h2>

        <nav className="space-y-2 text-sm">
          <NavLink to="/faculty/dashboard" className={linkStyle}>Dashboard</NavLink>
          <NavLink to="/faculty/profile" className={linkStyle}>Profile</NavLink>
          <NavLink to="/faculty/subjects" className={linkStyle}>Subjects</NavLink>
          <NavLink to="/faculty/students" className={linkStyle}>Students</NavLink>
          <NavLink to="/faculty/attendance" className={linkStyle}>Attendance</NavLink>
          <NavLink to="/faculty/assignments" className={linkStyle}>Assignments</NavLink>
          <NavLink to="/faculty/marks" className={linkStyle}>Marks</NavLink>
          <NavLink to="/faculty/materials" className={linkStyle}>Study Materials</NavLink>
          <NavLink to="/faculty/announcements" className={linkStyle}>Announcements</NavLink>
          <NavLink to="/faculty/timetable" className={linkStyle}>Timetable</NavLink>
          <NavLink to="/faculty/leave" className={linkStyle}>Leave</NavLink>
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