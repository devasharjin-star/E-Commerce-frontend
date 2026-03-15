const AuthLayout = ({ children }) => {
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4

      bg-gray-100
      dark:bg-gray-950
      "
    >
      {children}
    </div>
  );
};

export default AuthLayout;