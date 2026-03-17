import { Search, Bell, Sun, Moon, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Topbar = () => {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <header
      className="
      sticky top-0 z-30
      bg-white/90 backdrop-blur
      border-b border-gray-200
      dark:bg-gray-900/90 dark:border-gray-800
      "
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* 🔹 Left Section */}
        <div className="flex items-center gap-4">
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <Menu size={22} />
          </button>

          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        {/* 🔹 Center — Search (hidden on small screens) */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="
              w-full pl-10 pr-4 py-2
              rounded-lg
              bg-gray-100
              border border-transparent
              focus:outline-none focus:ring-2 focus:ring-indigo-500

              dark:bg-gray-800
              dark:focus:ring-indigo-400
              "
            />
          </div>
        </div>

        {/* 🔹 Right Section */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
            p-2 rounded-lg
            hover:bg-gray-100
            dark:hover:bg-gray-800
            transition
            "
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <button
            className="
            relative p-2 rounded-lg
            hover:bg-gray-100
            dark:hover:bg-gray-800
            "
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Profile */}
          <div
            className="
            w-9 h-9 rounded-full
            bg-indigo-600 text-white
            flex items-center justify-center
            font-semibold text-sm
            "
          >
            S
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;