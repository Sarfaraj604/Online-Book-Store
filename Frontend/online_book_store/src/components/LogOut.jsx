import { useAuth } from "../context/useAuth";

const LogoutHandler = () => {
  const { logout } = useAuth();
  return logout;
};

export default LogoutHandler;