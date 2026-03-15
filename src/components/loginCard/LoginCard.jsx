import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import api from "../../api/axios.js";

const LoginPage = () => {
  const navigate = useNavigate();

  /* ================= STATE ================= */

  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= HELPERS ================= */

  const saveSession = (token, role) => {
    const storage = remember ? localStorage : localStorage;
    storage.setItem("accessToken", token);
    storage.setItem("role", role);
  };

  const redirectByRole = (role) => {
    switch (role) {
      case "student":
        navigate("/student/profile");
        break;
      case "admin":
        navigate("/admin/dashboard");
        break;
      case "faculty":
        navigate("/faculty/dashboard");
        break;
      default:
        navigate("/");
    }
  };

  /* ================= LOGIN ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent double submit
    setError("");

    if (!regNo.trim() || !password.trim()) {
      setError("Enter User ID and Password");
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post("/auth/login", {
        regNo: regNo.trim(),
        password,
      });

      const { accessToken, role } = data;

      saveSession(accessToken, role);
      redirectByRole(role);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-sm dark:shadow-lg border border-gray-200 dark:border-gray-800">

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
          Sign in
        </h2>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          Enter your credentials to continue
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* USER ID */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300">
              User ID
            </label>

            <input
              name="regNo"
              type="text"
              autoComplete="username"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="Enter your ID"
              disabled={loading}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300">
              Password
            </label>

            <div className="relative mt-1">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                disabled={loading}
                className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember((prev) => !prev)}
                className="accent-blue-600"
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <div className="text-sm text-red-600 dark:text-red-400 text-center">
              {error}
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;