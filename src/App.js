import { Navigate, Route, Routes } from "react-router-dom";
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
import TournamentList from "./pages/TournamentList";
import Register from "./pages/Register";
import Leaderboard from "./pages/Leaderboard";
import { useEffect, useState } from "react";

function App() {
  //using this for temporary authentication
  const [user, setUser] = useState(null);

  useEffect(() => {
    const us = localStorage.getItem("user");
    us && JSON.parse(us) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  console.log(user);
  return (
    <div className="app">
      <Layout>
        <Routes>
          {user && (
            <>
              <Route
                path="/ViewPlayer"
                element={<ViewPlayer logout={() => setUser(false)} />}
              />
              <Route path="/EditProfile" element={<EditProfile />} />
              <Route
                path="/ViewProfile"
                element={<ViewProfile logout={() => setUser(false)} />}
              />
            </>
          )}
          {!user && (
            <>
              <Route
                path="/Login"
                element={<Login authenticate={() => setUser(true)} />}
              />
            </>
          )}
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/PageList" element={<PageList />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/JustATestFile" element={<JustATestFile />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          <Route path="/NotAPage" element={<NotAPage />} />
          <Route path="/TournamentList" element={<TournamentList />} />
          {/* <Route
            path="*"
            element={<Navigate to={user ? "/NotAPage" : "/Login"} />}
          /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
