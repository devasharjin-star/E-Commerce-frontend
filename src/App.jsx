import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/dashboard/DashboardLayout";
import AcademicOverview from "./pages/student/AcademicOverview";
import Timetable from "./pages/student/Timetable";
import Assignments from "./pages/student/Assignments";
import Attendance from "./pages/student/Attendance";
import Fees from "./pages/student/Fees";
import Announcements from "./pages/student/Announcements";
import Login from "./pages/Login";
import Profile from "./pages/student/Profile";
import ProtectedRoute from "./routes/protectedRoute.jsx";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>

          <Route path="/student" element={<DashboardLayout />}>

            <Route path="academics" element={<AcademicOverview />} />
            <Route path="profile" element={<Profile />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="fees" element={<Fees />} />
            <Route path="announcements" element={<Announcements />} />

          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;