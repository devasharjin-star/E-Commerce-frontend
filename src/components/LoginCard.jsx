import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import api from "../api/axios.js";

const LoginCard = ({ title }) => {
  const navigate = useNavigate();

  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {

      if (!regNo || !password) {
        setError("Please enter User ID and Password");
        return;
      }

      const result = await api.post("/auth/login", {
        regNo,
        password,
      });

      setSuccess(result.data.message);

      const token = result.data.accessToken;

      if (token) {
        localStorage.setItem("accessToken", token);
      }

      navigate("/student/profile")

    } catch (e) {
      setError(
        e.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="w-full max-w-md bg-white text-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200
                    dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700">

      <h2 className="text-2xl font-bold text-center mb-6">
        {title}
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>

        {/* User ID */}
        <div>
          <label className="block mb-2 text-sm">
            User ID
          </label>

          <input
            type="text"
            placeholder="Enter User ID"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition
                       dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-sm">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition
                         dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-300"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        {/* Success */}
        {success && (
          <p className="text-green-500 text-sm text-center">
            {success}
          </p>
        )}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

      </form>
    </div>
  );
};

export default LoginCard;