import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
  isProtected,
  redirectPath,
}: {
  isProtected: boolean;
  redirectPath: string;
}) => {
  if (isProtected) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
