import SectionCard from "../../components/dashboard/SectionCard";
import StatCard from "../../components/dashboard/StatCard";
import { UserCheck, AlertTriangle, BookOpen } from "lucide-react";

const Attendance = () => {
  const subjects = [
    { name: "Data Structures", total: 40, attended: 36 },
    { name: "DBMS", total: 38, attended: 28 },
    { name: "Operating Systems", total: 42, attended: 30 },
    { name: "Computer Networks", total: 35, attended: 20 },
  ];

  const calculatePercentage = (attended, total) =>
    ((attended / total) * 100).toFixed(1);

  const getStatus = (percentage) => {
    if (percentage >= 75) return "Safe";
    if (percentage >= 65) return "Warning";
    return "Shortage";
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Safe":
        return {
          badge: "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200",
          bar: "bg-green-500",
        };
      case "Warning":
        return {
          badge: "bg-yellow-100 text-yellow-600 dark:bg-yellow-800 dark:text-yellow-200",
          bar: "bg-yellow-500",
        };
      default:
        return {
          badge: "bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200",
          bar: "bg-red-500",
        };
    }
  };

  // ⭐ Overall Stats
  const totalClasses = subjects.reduce((sum, s) => sum + s.total, 0);
  const attendedClasses = subjects.reduce((sum, s) => sum + s.attended, 0);
  const overallPercentage = ((attendedClasses / totalClasses) * 100).toFixed(1);

  const shortageCount = subjects.filter(
    (s) => calculatePercentage(s.attended, s.total) < 65
  ).length;

  return (
    <div className="space-y-6">

      {/* ⭐ Header */}
      <div>
        <h1 className="text-2xl font-semibold">
          Attendance Overview
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Track your attendance status across all subjects
        </p>
      </div>

      {/* ⭐ Summary Stats */}
      <div className="grid sm:grid-cols-3 gap-6">

        <StatCard
          title="Overall Attendance"
          value={`${overallPercentage}%`}
          icon={<UserCheck size={20} />}
        />

        <StatCard
          title="Total Classes"
          value={totalClasses}
          icon={<BookOpen size={20} />}
        />

        <StatCard
          title="Subjects in Shortage"
          value={shortageCount}
          icon={<AlertTriangle size={20} />}
        />

      </div>

      {/* ⭐ Subject Cards */}
      <SectionCard title="Subject-wise Attendance">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {subjects.map((subject, index) => {
            const percentage = calculatePercentage(
              subject.attended,
              subject.total
            );
            const status = getStatus(percentage);
            const styles = getStatusStyles(status);

            return (
              <div
                key={index}
                className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
              >
                {/* Subject Name */}
                <h3 className="font-semibold text-lg">
                  {subject.name}
                </h3>

                {/* Class Info */}
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {subject.attended} / {subject.total} classes attended
                </div>

                {/* Percentage + Status */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {percentage}%
                  </span>

                  <span
                    className={`px-3 py-1 text-xs rounded-full ${styles.badge}`}
                  >
                    {status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${styles.bar} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

              </div>
            );
          })}

        </div>

      </SectionCard>

    </div>
  );
};

export default Attendance;