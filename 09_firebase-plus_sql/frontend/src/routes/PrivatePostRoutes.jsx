import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";

export default function PrivatePostRoutes() {
  const { currentUser } = useAuth();

  const getPost = () => {
    api.get(`posts/${currentUser.uid}`).then((response) => {});
  };

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
