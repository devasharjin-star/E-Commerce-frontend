import { useState } from "react";

const AcademicOverview = () => {
  const subjects = [
    {
      name: "Data Structure",
      attendance: 90,
      internal: { iat1: 22, iat2: 23 },
      slip: { s1: 4, s2: 3, s3: 4, s4: 4, s5: 3 },
      assignment: {
        a1: "Submitted",
        a2: "Pending",
        a3: "Submitted",
        a4: "Submitted",
        a5: "Pending"
      }
    },
    {
      name: "Operating Systems",
      attendance: 85,
      internal: { iat1: 20, iat2: 20 },
      slip: { s1: 3, s2: 4, s3: 3, s4: 3, s5: 3 },
      assignment: {
        a1: "Submitted",
        a2: "Submitted",
        a3: "Pending",
        a4: "Submitted",
        a5: "Pending"
      }
    },
    {
      name: "Database Management",
      attendance: 92,
      internal: { iat1: 24, iat2: 24 },
      slip: { s1: 5, s2: 4, s3: 5, s4: 4, s5: 4 },
      assignment: {
        a1: "Submitted",
        a2: "Submitted",
        a3: "Submitted",
        a4: "Submitted",
        a5: "Submitted"
      }
    }
  ];

  const [selectedInternal, setSelectedInternal] = useState("iat1");
  const [selectedSlip, setSelectedSlip] = useState("s1");
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].name);

  const currentSubject = subjects.find(
    (sub) => sub.name === selectedSubject
  );

  return (
    <div className="space-y-10">

      {/* ===== Subjects ===== */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-6">
          Current Semester Subjects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((sub, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg">{sub.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Attendance: {sub.attendance}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Internal Assessment ===== */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-6">
          Internal Assessment (IAT)
        </h2>

        <div className="flex gap-3 mb-6">
          {["iat1", "iat2"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedInternal(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedInternal === type
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((sub, index) => {
            const mark = sub.internal[selectedInternal];
            const percentage = (mark / 25) * 100;

            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-lg">{sub.name}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {mark} / 25
                </p>

                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3">
                  <div
                    className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Slip Tests ===== */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-6">
          Slip Tests
        </h2>

        <div className="flex flex-wrap gap-3 mb-6">
          {["s1", "s2", "s3", "s4", "s5"].map((type, i) => (
            <button
              key={type}
              onClick={() => setSelectedSlip(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedSlip === type
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              }`}
            >
              Slip {i + 1}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((sub, index) => {
            const mark = sub.slip[selectedSlip];
            const percentage = (mark / 5) * 100;

            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-lg">{sub.name}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {mark} / 5
                </p>

                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3">
                  <div
                    className="h-2 rounded-full bg-purple-500 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Assignment Submission ===== */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-6">
          Assignment Submission Status
        </h2>

        <div className="flex flex-wrap gap-3 mb-6">
          {subjects.map((sub) => (
            <button
              key={sub.name}
              onClick={() => setSelectedSubject(sub.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedSubject === sub.name
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>

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

    </div>
  );
};

export default AcademicOverview;