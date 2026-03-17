import { useState, useMemo } from "react";
import SectionCard from "../../components/dashboard/SectionCard";
import StatCard from "../../components/dashboard/StatCard";
import { Wallet, CheckCircle, AlertCircle } from "lucide-react";

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
    <div className="space-y-6">

      {/* ⭐ Header */}
      <div>
        <h1 className="text-2xl font-semibold">
          Fee & Payment Details
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          View semester-wise payments and outstanding balance
        </p>
      </div>

      {/* ⭐ Semester Tabs */}
      <div className="flex flex-wrap gap-3">
        {feesData.map((sem) => (
          <button
            key={sem.semester}
            onClick={() => setSelectedSemester(sem.semester)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedSemester === sem.semester
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            {sem.semester}
          </button>
        ))}
      </div>

      {/* ⭐ Summary Stats */}
      <div className="grid sm:grid-cols-3 gap-6">

        <StatCard
          title="Total Fees"
          value={`₹ ${totals.total.toLocaleString()}`}
          icon={<Wallet size={20} />}
        />

        <StatCard
          title="Paid Amount"
          value={`₹ ${totals.paid.toLocaleString()}`}
          icon={<CheckCircle size={20} />}
        />

        <StatCard
          title="Pending Amount"
          value={`₹ ${totals.unpaid.toLocaleString()}`}
          icon={<AlertCircle size={20} />}
        />

      </div>

      {/* ⭐ Fee Breakdown Table */}
      <SectionCard title={`${selectedSemester} Fee Breakdown`}>

        <div className="overflow-x-auto">

          <table className="w-full text-left text-sm">

            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="p-3 font-medium">Fee Type</th>
                <th className="p-3 font-medium">Amount</th>
                <th className="p-3 font-medium text-right">Status</th>
              </tr>
            </thead>

            <tbody>
              {currentSemester.fees.map((fee, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <td className="p-3">{fee.title}</td>

                  <td className="p-3">
                    ₹ {fee.amount.toLocaleString()}
                  </td>

                  <td className="p-3 text-right">
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

      </SectionCard>

    </div>
  );
};

export default Fees;