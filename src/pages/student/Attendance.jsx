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

  return (
    <div className="p-6">
      
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-gray-200">
          Subject-wise Attendance
        </h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          Track your attendance status for each subject
        </p>
      </div>

      {/* Cards Grid */}
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
              className="bg-white dark:bg-gray-900 
              border border-gray-200 dark:border-gray-700 
              rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Subject Name */}
              <h3 className="text-lg font-semibold">
                {subject.name}
              </h3>

              {/* Class Info */}
              <div className="mt-4 text-sm text-[var(--muted)] space-y-1">
                <p>Total Classes: {subject.total}</p>
                <p>Attended: {subject.attended}</p>
              </div>

              {/* Percentage + Status */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold">
                  {percentage}%
                </span>

                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${styles.badge}`}
                >
                  {status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${styles.bar} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;