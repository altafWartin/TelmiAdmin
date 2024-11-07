import axios from "axios";
import { toast } from "react-toastify";

// Base URL for your API
// const API_BASE_URL = 'https://pk20l61n-8000.inc1.devtunnels.ms/api';
const API_BASE_URL = 'http://54.81.101.132:8000/api';


// Function to get token from localStorage
const getToken = () => localStorage.getItem("token");

// Create Axios instance for the API
const token = getToken(); // Retrieve token once and reuse
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    authorization: token ? `Bearer ${token}` : undefined, // Include token in Authorization header
  },
});

// Centralized error handling function
const handleApiError = (error) => {
  if (error.response) {
    if (process.env.NODE_ENV !== 'production') {
      console.error("Error Response:", error.response);
    }
    toast.error(
      `Request failed: ${error.response.data.message || "Server error"}`
    );
  } else if (error.request) {
    if (process.env.NODE_ENV !== 'production') {
      console.error("Error Request:", error.request);
    }
    toast.error("Request failed: No response from server");
  } else {
    if (process.env.NODE_ENV !== 'production') {
      console.error("Error Message:", error.message);
    }
    toast.error(`Request failed: ${error.message}`);
  }
};

// Axios interceptor for token refresh logic (optional)
api.interceptors.response.use(
  (response) => response, // Handle successful response
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Optionally handle token refresh logic here
      // Example: Refresh token logic or redirect to login page
      // After refreshing, you can retry the request with the new token
    }
    return Promise.reject(error);
  }
);

// // Global toast configuration
// toast.configure({
//   position: toast.POSITION.BOTTOM_RIGHT,
//   limit: 3,  // Limit the number of simultaneous toasts
// });

// Export the Axios instance and error handler
export { api, handleApiError };
