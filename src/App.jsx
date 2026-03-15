import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Student Layout */
import StudDashLayout from "./components/layout/studentLayout/studDashLayout.jsx";
import AcademicOverview from "./pages/student/AcademicOverview";
import Timetable from "./pages/student/Timetable";
import StudentAssignments from "./pages/student/Assignments";
import StudentAttendance from "./pages/student/Attendance";
import Fees from "./pages/student/Fees";
import Announcements from "./pages/student/Announcements";
import StudentProfile from "./pages/student/Profile";

/* Faculty Layout */
import FacultyDashLayout from "./components/layout/facultyLayout/facultyDashLayout.jsx";
import FacultyDashboard from "./pages/faculty/Dashboard";
import FacultyProfile from "./pages/faculty/Profile";
import Subjects from "./pages/faculty/Subjects";
import Students from "./pages/faculty/Students";
import FacultyAttendance from "./pages/faculty/Attendance";
import FacultyAssignments from "./pages/faculty/Assignments";

/* Auth */
import Login from "./pages/auth/Login.jsx";
import ProtectedRoute from "./routes/protectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>

          {/* Student Routes */}
          <Route path="/student" element={<StudDashLayout />}>
            <Route path="academics" element={<AcademicOverview />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="assignments" element={<StudentAssignments />} />
            <Route path="attendance" element={<StudentAttendance />} />
            <Route path="fees" element={<Fees />} />
            <Route path="announcements" element={<Announcements />} />
          </Route>

          {/* Faculty Routes */}
          <Route path="/faculty" element={<FacultyDashLayout />}>
            <Route path="dashboard" element={<FacultyDashboard />} />
            <Route path="profile" element={<FacultyProfile />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="students" element={<Students />} />
            <Route path="attendance" element={<FacultyAttendance />} />
            <Route path="assignments" element={<FacultyAssignments />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;