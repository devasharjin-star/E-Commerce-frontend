import { useMemo } from "react";
import SectionCard from "../../components/dashboard/SectionCard";

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
    <div className="space-y-6">

      {/* ⭐ Page Header */}
      <h1 className="text-2xl font-semibold">
        Weekly Timetable
      </h1>

      {/* ⭐ Timetable Grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {Object.entries(timetable).map(([day, subjects]) => {
          const isToday = today === day;

          return (
            <SectionCard
              key={day}
              title={day}
              action={
                isToday && (
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white">
                    Today
                  </span>
                )
              }
            >
              <div className="space-y-2">

                {subjects.map((subject, i) => (
                  <div
                    key={i}
                    className={`
                      flex items-center justify-between
                      px-3 py-2 rounded-lg text-sm
                      ${
                        subject === "Break"
                          ? "italic text-gray-400"
                          : "bg-gray-100 dark:bg-gray-800"
                      }
                    `}
                  >
                    {/* Period */}
                    <span className="font-medium text-gray-500 dark:text-gray-400">
                      P{i + 1}
                    </span>

                    {/* Subject */}
                    <span className="text-right">
                      {subject === "Break" ? "☕ Break" : subject}
                    </span>
                  </div>
                ))}

              </div>
            </SectionCard>
          );
        })}

      </div>

    </div>
  );
};

export default Timetable;