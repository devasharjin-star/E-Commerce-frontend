import { useState } from "react";
import { Megaphone, Search } from "lucide-react";
import SectionCard from "../../components/dashboard/SectionCard";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Mid Semester Exam Schedule Released",
      description:
        "The mid semester exam timetable has been published. Please check the academic portal.",
      category: "Exam",
      priority: "Important",
      date: "20 March 2026"
    },
    {
      id: 2,
      title: "Tech Symposium 2026",
      description:
        "Register now for the inter-department tech symposium happening next month.",
      category: "Event",
      priority: "Normal",
      date: "18 March 2026"
    },
    {
      id: 3,
      title: "Assignment Submission Deadline",
      description:
        "Last date to submit Assignment 3 is 22 March 2026 before 5 PM.",
      category: "Academic",
      priority: "Urgent",
      date: "19 March 2026"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAnnouncements = announcements.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-6">

      {/* ⭐ Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <h1 className="text-2xl font-semibold flex items-center gap-3">
          <Megaphone className="text-indigo-600" size={24} />
          Announcements
        </h1>

        {/* Search */}
        <div className="relative w-full lg:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search announcements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full pl-10 pr-4 py-2 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            "
          />
        </div>
      </div>

      {/* ⭐ Filters */}
      <SectionCard title="Categories">
        <div className="flex flex-wrap gap-3">
          {["All", "Academic", "Exam", "Event"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition
                ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </SectionCard>

      {/* ⭐ Announcement Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((item) => (
            <div
              key={item.id}
              className="
                p-6 rounded-2xl
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                hover:shadow-lg transition
                flex flex-col justify-between
              "
            >
              <div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  {item.description}
                </p>

              </div>

              <div className="mt-6 flex items-center justify-between">

                <PriorityBadge priority={item.priority} />

                <span className="text-xs text-gray-400">
                  {item.date}
                </span>

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No announcements found.
          </p>
        )}

      </div>

    </div>
  );
};

/* ⭐ Priority Badge Component */

const PriorityBadge = ({ priority }) => {
  const styles = {
    Urgent:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    Important:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    Normal:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${styles[priority]}`}
    >
      {priority}
    </span>
  );
};

export default Announcements;