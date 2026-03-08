const StatCard = ({ title, value, icon }) => {
  return (
    <div
      className="
      bg-white
      text-gray-800
      p-5
      rounded-2xl
      shadow-sm
      hover:shadow-md
      transition
      flex items-center justify-between
      border border-gray-200

      dark:bg-gray-900
      dark:text-gray-200
      dark:border-gray-700
      "
    >
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </p>

        <h3 className="text-2xl font-bold mt-1">
          {value}
        </h3>
      </div>

      <div
        className="
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-gray-100

        dark:bg-blue-600
        "
      >
        {icon}
      </div>
    </div>
  );
};

export default StatCard;