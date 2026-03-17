const StatCard = ({ title, value, icon, accent = "indigo" }) => {
  return (
    <div
      className="
      relative
      bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-800
      rounded-2xl
      p-5
      flex items-center justify-between
      transition
      hover:shadow-lg
      hover:-translate-y-0.5
      "
    >
      {/* 🔹 Left Content */}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {title}
        </p>

        <h3 className="text-2xl font-bold mt-1 tracking-tight">
          {value}
        </h3>
      </div>

      {/* 🔹 Icon Container */}
      <div
        className={`
        w-12 h-12 flex items-center justify-center
        rounded-xl
        bg-${accent}-100 text-${accent}-600
        dark:bg-${accent}-600/20 dark:text-${accent}-400
        `}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatCard;