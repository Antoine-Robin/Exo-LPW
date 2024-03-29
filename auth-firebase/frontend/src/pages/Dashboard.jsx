import { useEffect, useState, useContext } from "react";
import { useAuth } from "./../contexts/AuthContext";
import { useApi } from "./../contexts/ApiContext";

function DashboardPage() {
  const { currentUser } = useAuth();
  const { api } = useApi();
  const [message, setMessage] = useState();

  const getSecrectMessage = async () => {
    const { data } = await api.get("secret/");
    setMessage(data.message);
  };

  console.log({ currentUser });

  useEffect(() => {
    getSecrectMessage();
  }, []);

  return (
    <header aria-label="Page Header">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Bienvenue, {currentUser.email}!
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <h2>{message}</h2>
      </div>
    </header>
  );
}

export default DashboardPage;
