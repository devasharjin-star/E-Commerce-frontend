import { useState, useMemo } from "react";

const Fees = () => {
  const feesData = [
    {
      semester: "Semester 1",
      fees: [
        { title: "Tuition Fee", amount: 45000, status: "Paid" },
        { title: "Lab Fee", amount: 5000, status: "Paid" },
        { title: "Library Fee", amount: 2000, status: "Paid" }
      ]
    },
    {
      semester: "Semester 2",
      fees: [
        { title: "Tuition Fee", amount: 47000, status: "Paid" },
        { title: "Lab Fee", amount: 6000, status: "Unpaid" },
        { title: "Exam Fee", amount: 3000, status: "Unpaid" }
      ]
    },
    {
      semester: "Semester 3",
      fees: [
        { title: "Tuition Fee", amount: 50000, status: "Unpaid" },
        { title: "Lab Fee", amount: 6000, status: "Unpaid" },
        { title: "Sports Fee", amount: 2500, status: "Paid" }
      ]
    }
  ];

  const [selectedSemester, setSelectedSemester] = useState("Semester 1");

  const currentSemester = feesData.find(
    (sem) => sem.semester === selectedSemester
  );

  const totals = useMemo(() => {
    const total = currentSemester.fees.reduce(
      (sum, item) => sum + item.amount,
      0
    );

    const paid = currentSemester.fees
      .filter((item) => item.status === "Paid")
      .reduce((sum, item) => sum + item.amount, 0);

    const unpaid = total - paid;

    return { total, paid, unpaid };
  }, [currentSemester]);

  return (
    <div className="space-y-8">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Fee & Payment Details
        </h1>
        <p className="text-sm text-[var(--muted)] mt-1">
          View semester-wise fee payments and pending balances
        </p>
      </div>

      {/* Semester Filter */}
      <div className="flex flex-wrap gap-3">
        {feesData.map((sem) => (
          <button
            key={sem.semester}
            onClick={() => setSelectedSemester(sem.semester)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedSemester === sem.semester
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            {sem.semester}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-6">

        <div className="p-6 rounded-2xl bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-sm">
          <p className="text-sm text-black dark:text-white">
            Total Fees
          </p>
          <h2 className="text-xl font-semibold mt-2 text-black dark:text-white">
            ₹ {totals.total.toLocaleString()}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-sm">
          <p className="text-sm text-black dark:text-white">
            Paid Amount
          </p>
          <h2 className="text-xl font-semibold text-green-600 mt-2">
            ₹ {totals.paid.toLocaleString()}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-sm">
          <p className="text-sm text-black dark:text-white">
            Pending Amount
          </p>
          <h2 className="text-xl font-semibold text-red-600 mt-2">
            ₹ {totals.unpaid.toLocaleString()}
          </h2>
        </div>

      </div>

      {/* Fee Table */}
      <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-sm">

        <table className="w-full text-left border-collapse">

          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-black dark:text-white text-sm">
              <th className="p-4">Fee Type</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {currentSemester.fees.map((fee, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="p-4 text-black dark:text-white">
                  {fee.title}
                </td>

                <td className="p-4 text-black dark:text-white">
                  ₹ {fee.amount.toLocaleString()}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      fee.status === "Paid"
                        ? "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200"
                        : "bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200"
                    }`}
                  >
                    {fee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Fees;