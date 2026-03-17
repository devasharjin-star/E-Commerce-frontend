import { useState } from "react";
import SectionCard from "../../components/dashboard/SectionCard";

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
    <div className="space-y-6">

      {/* ⭐ Subjects */}
      <SectionCard title="Current Semester Subjects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((sub) => (
            <div
              key={sub.name}
              className="
              p-5 rounded-xl
              bg-gray-50 dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              hover:shadow-md transition
              "
            >
              <h3 className="font-semibold text-lg">{sub.name}</h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Attendance: {sub.attendance}%
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ⭐ Internal Assessment */}
      <SectionCard title="Internal Assessment (IAT)">
        <TabSelector
          options={["iat1", "iat2"]}
          selected={selectedInternal}
          onChange={setSelectedInternal}
        />

        <MarksGrid
          subjects={subjects}
          type="internal"
          keyName={selectedInternal}
          max={25}
          color="indigo"
        />
      </SectionCard>

      {/* ⭐ Slip Tests */}
      <SectionCard title="Slip Tests">
        <TabSelector
          options={["s1", "s2", "s3", "s4", "s5"]}
          selected={selectedSlip}
          onChange={setSelectedSlip}
          labelPrefix="Slip "
        />

        <MarksGrid
          subjects={subjects}
          type="slip"
          keyName={selectedSlip}
          max={5}
          color="purple"
        />
      </SectionCard>

      {/* ⭐ Assignments */}
      <SectionCard title="Assignment Submission Status">
        <TabSelector
          options={subjects.map((s) => s.name)}
          selected={selectedSubject}
          onChange={setSelectedSubject}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(currentSubject.assignment).map(
            ([key, value], index) => (
              <div
                key={key}
                className="
                p-5 rounded-xl
                bg-gray-50 dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                "
              >
                <h3 className="font-semibold text-lg">
                  Assignment {index + 1}
                </h3>

                <StatusBadge status={value} />
              </div>
            )
          )}
        </div>
      </SectionCard>

    </div>
  );
};

/* ================= COMPONENTS ================= */

const TabSelector = ({
  options,
  selected,
  onChange,
  labelPrefix = ""
}) => (
  <div className="flex flex-wrap gap-3 mb-6">
    {options.map((opt, i) => (
      <button
        key={opt}
        onClick={() => onChange(opt)}
        className={`
        px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          selected === opt
            ? "bg-indigo-600 text-white shadow"
            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }
        `}
      >
        {labelPrefix ? `${labelPrefix}${i + 1}` : opt.toUpperCase()}
      </button>
    ))}
  </div>
);

const MarksGrid = ({
  subjects,
  type,
  keyName,
  max,
  color
}) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {subjects.map((sub) => {
      const mark = sub[type][keyName];
      const percentage = (mark / max) * 100;

      return (
        <div
          key={sub.name}
          className="
          p-5 rounded-xl
          bg-gray-50 dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          "
        >
          <h3 className="font-semibold text-lg">{sub.name}</h3>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {mark} / {max}
          </p>

          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3">
            <div
              className={`h-2 rounded-full bg-${color}-500 transition-all`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      );
    })}
  </div>
);

const StatusBadge = ({ status }) => (
  <div className="mt-3">
    <span
      className={`
      px-3 py-1 text-xs rounded-full font-medium
      ${
        status === "Submitted"
          ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
          : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
      }
      `}
    >
      {status}
    </span>
  </div>
);

export default AcademicOverview;