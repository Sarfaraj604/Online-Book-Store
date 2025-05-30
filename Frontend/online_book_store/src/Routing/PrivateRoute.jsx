import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;