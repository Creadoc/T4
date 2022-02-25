import Axios from "axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refr = async () => {
    const response = await Axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      //this should get a refresh token... but we've got to create a refresh token part in the API...
      return {
        ...prev,

        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refr;
};

export default useRefreshToken;
