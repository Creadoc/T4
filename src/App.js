import { Route, Routes } from "react-router-dom";
import ViewPlayer from "./pages/ViewPlayer";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import PageList from "./pages/PageList";
import JustATestFile from "./pages/JustATestFile";
import ViewProfile from "./pages/ViewProfile";
import NotAPage from "./pages/NotAPage";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ViewPlayer" element={<ViewPlayer />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/PageList" element={<PageList />} />
          <Route path="/JustATestFile" element={<JustATestFile />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ViewProfile" element={<ViewProfile />} />
          <Route path="/NotAPage" element={<NotAPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
