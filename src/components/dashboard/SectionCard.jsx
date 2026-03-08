const SectionCard = ({ title, children }) => {
  return (
    <div
      className="
      bg-white
      text-gray-800
      p-6
      rounded-2xl
      shadow-sm
      border border-gray-200

      dark:bg-gray-900
      dark:text-gray-200
      dark:border-gray-700
      "
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default SectionCard;