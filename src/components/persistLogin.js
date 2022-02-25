import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
//will need to create these:
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const persistLogin = () => {
  const [isLoading, setIstLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        setIstLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIstLoading(false);
  }, []);

  //just for testing
  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`at: ${JSON.stringify(auth?.accessToken)}`);
  }, [isLoading]);

  return <>{isLoading ? <p>Loading....</p> : <Outlet />}</>;
};

export default persistLogin;
