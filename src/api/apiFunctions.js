import { api, handleApiError } from "./api"; // Adjust the import path

// Login user function
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/admin/login", {
      email,
      password,
    });

    const { token, user } = response.data;
    console.log("Logged in user:", user);

    // Store token and user information in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user)); // Convert user object to JSON string

    return {
      success: true,
      token,
      user,
    };
  } catch (error) {
    // Use the centralized error handler
    handleApiError(error);
    return {
      success: false,
      error: error.response?.data?.message || "Login failed", // Provide a user-friendly error message
    };
  }
};

export const fetchAllProfiles = async () => {
  try {
    const response = await api.post("/getAllProfiles"); // Assuming a POST request is needed
    return response.data.users; // Adjust according to the response structure
  } catch (error) {
    handleApiError(error); // Use your centralized error handler
    throw error; // Re-throw the error for handling in the component
  }
};


export const liveVideosByUserId = async (userId) => {
  try {
    // Ensure userId is provided
    if (!userId) {
      throw new Error('userId is required');
    }

    // Send the POST request with userId in the body
    const response = await api.post("/admin/liveVideosByUserId", { userId });

    // Return the relevant data from the response
    return response.data; // Adjust according to the actual response structure
  } catch (error) {
    handleApiError(error); // Use your centralized error handler
    throw error; // Re-throw the error for handling in the component
  }
};


export const deleteUserProfile = async (userId) => {
  try {
    const response = await api.post("/admin/deleteUser", {
      userId,
    });

    return response.data.message; // Return the message for the successful deletion
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const fetchSingleProfile = async (userId) => {
  try {
    const response = await api.post("/getSingleProfile", {
      _id: userId,
    });

    return response.data; // Return the fetched profile data
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const blockUserProfile = async (userId, status) => {
  try {
    const response = await api.post("/admin/blockOrUnblock", {
      userId,
      status,
    });

    return response.data.message; // Return the message for the successful block
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const sendNotification = async (data) => {
  console.log("send notification", data);
  try {
    const response = await api.post("/send-push-notification", data);

    return response.data.message; // Return the message for the successful block
  } catch (error) {
    handleApiError(error); // Assuming this function handles and logs errors
    throw error; // Re-throw the error for handling in the calling function
  }
};

export const dashboardUserData = async () => {
  try {
    const response = await api.get("/admin/usersDashboard"); // Assuming a POST request is needed
    return response.data; // Adjust according to the response structure
  } catch (error) {
    handleApiError(error); // Use your centralized error handler
    throw error; // Re-throw the error for handling in the component
  }
};

export const resetPassword = async (data) => {
  console.log("Resetting password", data);
  try {
    const response = await api.post("/admin/resetPassword", data);

    return response.data.message; // Return the message for the successful block
  } catch (error) {
    handleApiError(error); // Handle and log errors
    throw error; // Re-throw the error for handling in the calling function
  }
};

export const hostedRooms = async (userId) => {
  try {
    // Make sure to use the correct endpoint and method
    const response = await api.get(`/admin/hosted-rooms/${userId}`); // Changed to GET and adjusted URL
    return response.data; // Adjust according to the response structure
  } catch (error) {
    handleApiError(error); // Use your centralized error handler
    throw error; // Re-throw the error for handling in the component
  }
};


export const allHostedRoomsData = async () => {
  try {
    // Make sure to use the correct endpoint and method
    const response = await api.get(`/admin/rooms-hosted/monthly`); // Changed to GET and adjusted URL
    return response.data; // Adjust according to the response structure
  } catch (error) {
    handleApiError(error); // Use your centralized error handler
    throw error; // Re-throw the error for handling in the component
  }
};

export const usersMonthlyDashboardData = async (month) => {
  try {
    // Make sure to use the correct endpoint and method
    const response = await api.get(
      `/admin/usersMonthlyDashboardData?month=${month}`
    ); // Changed to GET and adjusted URL
    return response.data; // Adjust according to the response structure
  } catch (error) {
    handleApiError(error); // Use your centralized error handler
    throw error; // Re-throw the error for handling in the component
  }
};
