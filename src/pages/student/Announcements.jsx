import { useState } from "react";
import { Megaphone, Search } from "lucide-react";

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
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Megaphone size={22} />
          Announcements
        </h1>

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-2.5 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search announcements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              pl-10 pr-4 py-2 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-blue-500
              w-full md:w-64
            "
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {["All", "Academic", "Exam", "Event"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Announcement Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((item) => (
            <div
              key={item.id}
              className="
                p-6 rounded-2xl
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-700
                shadow-sm hover:shadow-md transition
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

              <div className="mt-5 flex items-center justify-between">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    item.priority === "Urgent"
                      ? "bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200"
                      : item.priority === "Important"
                      ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-800 dark:text-yellow-200"
                      : "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200"
                  }`}
                >
                  {item.priority}
                </span>

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

export default Announcements;