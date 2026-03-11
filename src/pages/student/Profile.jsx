import { useEffect } from "react";
import api from "../../api/axios.js";
import SectionCard from "../../components/dashboard/SectionCard";
import StatCard from "../../components/dashboard/StatCard";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const Profile = () => {
 useEffect(() => {

    const fetchProfile = async () => {
      const res = await api.get("/auth/add");
    };

    fetchProfile();

  }, []);

  return (
    <div className="space-y-6">

      {/* Profile Info */}
      <SectionCard title="Student Profile">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          <div className="w-28 h-28 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-gray-800 dark:text-gray-100">
            JS
          </div>

          <div className="text-center md:text-left space-y-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              John Smith
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Computer Science - 3rd Year
            </p>

            <div className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <p><strong>Student ID:</strong> STU1023</p>
              <p><strong>Email:</strong> john@example.com</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
            </div>
          </div>

        </div>
      </SectionCard>

      {/* Academic Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <StatCard
          title="Current GPA"
          value="8.7"
          icon={<GraduationCap size={20} />}
        />

        <StatCard
          title="Total Credits"
          value="120"
          icon={<BookOpen size={20} />}
        />

        <StatCard
          title="Attendance"
          value="92%"
          icon={<Calendar size={20} />}
        />

      </div>

      {/* Additional Info */}
      <SectionCard title="Additional Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

          <div>
            <p className="text-gray-500 dark:text-gray-400">Date of Birth</p>
            <p className="text-gray-800 dark:text-gray-200">15 March 2002</p>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400">Gender</p>
            <p className="text-gray-800 dark:text-gray-200">Male</p>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400">Address</p>
            <p className="text-gray-800 dark:text-gray-200">Chennai, Tamil Nadu</p>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400">Enrollment Year</p>
            <p className="text-gray-800 dark:text-gray-200">2022</p>
          </div>

        </div>
      </SectionCard>

    </div>
  );
};

export default Profile;