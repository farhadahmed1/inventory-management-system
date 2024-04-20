import { createContext, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const userLogin = (email, password) => {
    setLoading(true);
    return axiosPublic.post("/user/login", {
      email: email,
      password: password,
    });
  };
  const userLogOut = () => {
    setUser(null);
    setLoading(true);
  };
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    error,
    userLogin,
    userLogOut,
    setError,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
