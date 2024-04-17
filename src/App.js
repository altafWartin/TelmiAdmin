import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import DataAnalysis from "./pages/DataAnalysis";
import DataAnalysis1 from "./pages/DataAnalysis1";
import Navbar from "./components/Navbar";
import Sidbar from "./components/Sidbar";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/setting":
        title = "";
        metaDescription = "";
        break;
      case "/data-analysis":
        title = "";
        metaDescription = "";
        break;
      case "/data-analysis1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const shouldRenderNavbarAndSidebar = pathname !== "/login";

  return (
    <div className="w-full relative bg-royalblue-500 overflow-hidden flex flex-col items-start justify-start pt-[1.688rem] px-[2.188rem] pb-[1.438rem] box-border gap-[1.063rem] leading-[normal] tracking-[normal]">
      {shouldRenderNavbarAndSidebar && (
        <Navbar
          group2469="/group-2469@2x.png"
          group24691="/group-2469-1@2x.png"
          group24692="/group-2469-1@2x.png"
        />
      )}

      <main className="self-stretch flex flex-row items-start justify-start gap-[2.5rem] max-w-full mq675:gap-[1.25rem]">
        {shouldRenderNavbarAndSidebar && <Sidbar />}
        <Routes>
          <Route path="/userList" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/userProfile" element={<DataAnalysis />} />
          <Route path="/" element={<DataAnalysis1 />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
