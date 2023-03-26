import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import GuestRoute from "./components/GuestRoute";

import NavBar from "./components/NavBar";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { authValue, AuthContext } from "./context/authContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <AuthContext.Provider value={authValue}>
      <Router>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/profile" element={<PrivateRoute />}>
                <Route exact path="/profile" element={<ProfilePage />} />
              </Route>

              <Route path="/login" element={<GuestRoute />}>
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route exact path="/feed" element={<FeedPage />} />
              <Route path="/feed/:category" element={<FeedPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
