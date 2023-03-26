import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PrivateRoute = () => {
  const { token } = useContext(AuthContext);
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      if (!token) {
        return setLoading(false);
      }

      try {
        const response = await axios.get("http://localhost:8080/protected", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          setAuthenticated(true);
        }
      } catch (err) {
        console.error(err);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
