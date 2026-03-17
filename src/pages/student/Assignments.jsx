import { useState } from "react";
import SectionCard from "../../components/dashboard/SectionCard";
import StatCard from "../../components/dashboard/StatCard";
import { FileCheck, Clock, BookOpen } from "lucide-react";

const Assignments = () => {
  const subjects = [
    {
      name: "Data Structures",
      assignment: {
        a1: "Submitted",
        a2: "Pending",
        a3: "Submitted",
      },
    },
    {
      name: "DBMS",
      assignment: {
        a1: "Pending",
        a2: "Pending",
        a3: "Submitted",
      },
    },
    {
      name: "Operating Systems",
      assignment: {
        a1: "Submitted",
        a2: "Submitted",
        a3: "Submitted",
      },
    },
  ];

  const [selectedSubject, setSelectedSubject] = useState(subjects[0].name);

  const currentSubject =
    subjects.find((sub) => sub.name === selectedSubject) || subjects[0];

  const assignments = Object.values(currentSubject.assignment);

  const submittedCount = assignments.filter(
    (a) => a === "Submitted"
  ).length;

  const pendingCount = assignments.length - submittedCount;

  return (
    <div className="space-y-6">

      {/* ⭐ Header */}
      <div>
        <h1 className="text-2xl font-semibold">
          Assignments
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Track submission status across subjects
        </p>
      </div>

      {/* ⭐ Subject Tabs */}
      <div className="flex flex-wrap gap-3">
        {subjects.map((sub) => (
          <button
            key={sub.name}
            onClick={() => setSelectedSubject(sub.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedSubject === sub.name
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* ⭐ Summary Stats */}
      <div className="grid sm:grid-cols-3 gap-6">

        <StatCard
          title="Total Assignments"
          value={assignments.length}
          icon={<BookOpen size={20} />}
        />

        <StatCard
          title="Submitted"
          value={submittedCount}
          icon={<FileCheck size={20} />}
        />

        <StatCard
          title="Pending"
          value={pendingCount}
          icon={<Clock size={20} />}
        />

      </div>

      {/* ⭐ Assignment Cards */}
      <SectionCard title={`${selectedSubject} Assignments`}>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {Object.entries(currentSubject.assignment).map(
            ([key, value], index) => (
              <div
                key={key}
                className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
              >
                {/* Assignment Title */}
                <h3 className="font-semibold text-lg">
                  Assignment {index + 1}
                </h3>

                {/* Status */}
                <div className="mt-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      value === "Submitted"
                        ? "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200"
                        : "bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200"
                    }`}
                  >
                    {value}
                  </span>
                </div>

              </div>
            )
          )}

        </div>

      </SectionCard>

    </div>
  );
};

export default Assignments;