import { useMemo } from "react";

const Timetable = () => {
  const timetable = {
    Monday: [
      "Data Structures",
      "Operating Systems",
      "Mathematics",
      "Break",
      "Database Management",
      "Library",
      "Project Lab",
    ],
    Tuesday: [
      "Mathematics",
      "Data Structures",
      "Break",
      "Operating Systems",
      "Sports",
      "Database Management",
      "Seminar",
    ],
    Wednesday: [
      "Database Management",
      "Mathematics",
      "Break",
      "Data Structures",
      "Project Lab",
      "Operating Systems",
      "Library",
    ],
    Thursday: [
      "Operating Systems",
      "Database Management",
      "Break",
      "Mathematics",
      "Seminar",
      "Data Structures",
      "Mentoring",
    ],
    Friday: [
      "Project Lab",
      "Data Structures",
      "Break",
      "Operating Systems",
      "Mentoring",
      "Mathematics",
      "Library",
    ],
    Saturday: [
      "Mathematics",
      "Seminar",
      "Break",
      "Project Discussion",
      "Sports",
      "Library",
      "Activity Hour",
    ],
  };

  const today = useMemo(() => {
    const days = Object.keys(timetable);
    const index = new Date().getDay() - 1;
    return days[index];
  }, []);

  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Weekly Timetable
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(timetable).map(([day, subjects]) => (
          <div
            key={day}
            className={`p-6 rounded-2xl border shadow-sm transition
            ${
              today === day
                ? "bg-blue-50 border-blue-400 dark:bg-blue-900/20"
                : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
            }`}
          >
            {/* Day Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                {day}
              </h2>

              {today === day && (
                <span className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white">
                  Today
                </span>
              )}
            </div>

            {/* Subjects */}
            <div className="space-y-2">
              {subjects.map((subject, i) => (
                <div
                  key={i}
                  className={`text-sm px-3 py-2 rounded-lg flex justify-between
                  ${
                    subject === "Break"
                      ? "italic text-gray-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  }`}
                >
                  <span>P{i + 1}</span>
                  <span>{subject}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Timetable;