const SectionCard = ({ title, children, action }) => {
  return (
    <section
      className="
      bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-800
      rounded-2xl
      overflow-hidden
      transition
      hover:shadow-lg
      "
    >
      {/* 🔹 Header */}
      <div
        className="
        flex items-center justify-between
        px-6 py-4
        border-b border-gray-200 dark:border-gray-800
        "
      >
        <h2 className="text-lg font-semibold tracking-tight">
          {title}
        </h2>

        {/* Optional right-side action (button, link, etc.) */}
        {action && <div>{action}</div>}
      </div>

      {/* 🔹 Content */}
      <div className="p-6">
        {children}
      </div>
    </section>
  );
};

export default SectionCard;