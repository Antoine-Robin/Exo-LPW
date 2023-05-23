import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppContextProviders from "../contexts/AppContextProvider";
import { AuthProvider } from "../contexts/AuthContext";
import { ApiProvider } from "../contexts/ApiContext";
import { ScrollProvider } from "../contexts/ScrollContext";

import PrivateRoute from "./../routes/PrivateRoutes";
import PrivatePostRoutes from "../routes/PrivatePostRoutes";

import LoginPage from "./../pages/LoginPage";
import Dashboard from "./../pages/Dashboard";
import PostsPage from "./../pages/PostsPage";
import PostPage from "../pages/postPage";
import NavBar from "./NavBar";
import CreatePost from "../pages/CreatePost";
import UpdatePost from "../pages/UpdatePost";

function App() {
  const providers = [AuthProvider, ApiProvider, ScrollProvider];

  return (
    <AppContextProviders components={providers}>
      <Router>
        <NavBar />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />} path="/" />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="post/new" element={<CreatePost />} />
          <Route element={<PrivatePostRoutes />}>
            <Route path="post/update/:id" element={<UpdatePost />} />
          </Route>
        </Routes>
      </Router>
    </AppContextProviders>
  );
}

export default App;
