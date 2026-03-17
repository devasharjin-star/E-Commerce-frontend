import { useEffect } from "react";
import api from "../../api/axios.js";
import SectionCard from "../../components/dashboard/SectionCard";
import StatCard from "../../components/dashboard/StatCard";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const Profile = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      await api.get("/auth/add");
    };

    fetchProfile();
  }, []);

  return (
    <div className="space-y-6">

      {/* ⭐ Profile Header */}
      <SectionCard title="Student Profile">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

          {/* Avatar */}
          <div
            className="
            w-28 h-28 rounded-2xl
            bg-gradient-to-br from-indigo-500 to-purple-600
            text-white
            flex items-center justify-center
            text-3xl font-bold
            shadow-lg
            "
          >
            JS
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left space-y-3">

            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                John Smith
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Computer Science • 3rd Year
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">

              <p>
                <span className="text-gray-500 dark:text-gray-400">
                  Student ID:
                </span>{" "}
                STU1023
              </p>

              <p>
                <span className="text-gray-500 dark:text-gray-400">
                  Email:
                </span>{" "}
                john@example.com
              </p>

              <p>
                <span className="text-gray-500 dark:text-gray-400">
                  Phone:
                </span>{" "}
                +91 9876543210
              </p>

            </div>
          </div>
        </div>
      </SectionCard>

      {/* ⭐ Academic Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        <StatCard
          title="Current GPA"
          value="8.7"
          icon={<GraduationCap size={22} />}
          accent="indigo"
        />

        <StatCard
          title="Total Credits"
          value="120"
          icon={<BookOpen size={22} />}
          accent="purple"
        />

        <StatCard
          title="Attendance"
          value="92%"
          icon={<Calendar size={22} />}
          accent="green"
        />

      </div>

      {/* ⭐ Additional Info */}
      <SectionCard title="Additional Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">

          <InfoItem label="Date of Birth" value="15 March 2002" />
          <InfoItem label="Gender" value="Male" />
          <InfoItem label="Address" value="Chennai, Tamil Nadu" />
          <InfoItem label="Enrollment Year" value="2022" />

        </div>
      </SectionCard>

    </div>
  );
};

/* 🔹 Reusable Info Item */
const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-gray-500 dark:text-gray-400 mb-1">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

export default Profile;