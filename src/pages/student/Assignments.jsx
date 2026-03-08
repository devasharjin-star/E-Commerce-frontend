import { useState } from "react";

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

  return (
    <div className="bg-white text-black dark:text-white p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <h2 className="text-xl font-semibold mb-6">
        Assignment Submission Status
      </h2>

      {/* Subject Filter */}
      <div className="flex flex-wrap gap-3 mb-6">
        {subjects.map((sub) => (
          <button
            key={sub.name}
            onClick={() => setSelectedSubject(sub.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedSubject === sub.name
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Assignment Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(currentSubject.assignment).map(
          ([key, value], index) => (
            <div
              key={key}
              className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg">
                Assignment {index + 1}
              </h3>

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
    </div>
  );
};

export default Assignments;