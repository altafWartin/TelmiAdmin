import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Notification from "./pages/Notification/Notifications";
import DataAnalysis from "./pages/DataAnalysis";
import DataAnalysis1 from "./pages/DataAnalysis1";
import Navbar from "./components/Navbar";
import Sidbar from "./components/Sidbar";
import PrivateRoute from "./PrivateRoute"; // Import the PrivateRoute component
import UserProfile from "./pages/UserProfile";

// Simulating authentication status
const useAuth = () => {
  const token = localStorage.getItem("token"); // Replace with your actual auth check
  return !!token; // Return true if token exists
};

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const isLoggedIn = useAuth();
  const shouldRenderNavbarAndSidebar = pathname !== "/login";

  return (
    <div className="w-full relative bg-royalblue-500 overflow-hidden flex flex-col items-start justify-start py-[1.388rem] px-[1.188rem] box-border gap-[1.063rem] leading-normal tracking-normal">
      {shouldRenderNavbarAndSidebar && (
        <Navbar
          group2469="/group-2469@2x.png"
          group24691="/group-2469-1@2x.png"
          group24692="/group-2469-1@2x.png"
        />
      )}

      <main className="self-stretch flex flex-row items-start justify-start gap-[1rem] max-w-full">
        {shouldRenderNavbarAndSidebar && <Sidbar />}

        <Routes>
          {/* Redirect logged-in users away from the login page */}
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
          />
          {/* Wrap protected routes with PrivateRoute */}
          <Route
            path="/userList"
            element={<PrivateRoute element={<UserList />} />}
          />
          <Route
            path="/setting"
            element={<PrivateRoute element={<Setting />} />}
          />
          <Route
            path="/notification"
            element={<PrivateRoute element={<Notification />} />}
          />
          <Route
            path="/userList/userProfile/:userId" // Add :userId parameter
            element={<PrivateRoute element={<UserProfile />} />}
          />
          <Route
            path="/"
            element={<PrivateRoute element={<DataAnalysis1 />} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
