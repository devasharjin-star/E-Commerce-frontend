import axios from "axios";

// ==============================
// 🔧 CREATE AXIOS INSTANCE
// ==============================
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // 🍪 send cookies (refresh token)
});

// ==============================
// 🔐 REQUEST INTERCEPTOR
// ==============================
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ==============================
// 🔄 RESPONSE INTERCEPTOR
// ==============================
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // ❌ If no response (network error etc.)
    if (!error.response) {
      return Promise.reject(error);
    }

    const status = error.response.status;

    // 🔥 EXTRA IMPORTANT FIXES INCLUDED
    const isLoginRequest =
      originalRequest.url?.includes("/auth/login");

    const isRefreshRequest =
      originalRequest.url?.includes("/auth/refresh");

    // ===================================================
    // 🔄 HANDLE ACCESS TOKEN EXPIRY (401)
    // ===================================================
    if (
      status === 401 &&
      !originalRequest._retry &&
      !isLoginRequest &&     // ❗ Don't refresh on login failure
      !isRefreshRequest      // ❗ Don't refresh refresh-call itself
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.get(
          "http://localhost:3000/api/auth/refresh",
          { withCredentials: true }
        );

        const newToken = res.data.accessToken;

        // 💾 Save new token
        localStorage.setItem("accessToken", newToken);

        // 🔁 Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);

      } catch (refreshError) {
        // 🚪 Refresh failed → logout user
        localStorage.removeItem("accessToken");
        localStorage.removeItem("role");

        window.location.href = "/";

        return Promise.reject(refreshError);
      }
    }

    // ===================================================
    // 🔴 VERY IMPORTANT — PROPAGATE REAL ERROR
    // ===================================================
    return Promise.reject(error);
  }
);

export default api;