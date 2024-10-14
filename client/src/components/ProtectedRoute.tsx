import React, { ReactElement, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import authContext from '../context';
import { UserContext } from '../context/AuthContext';

type ProtectedRoutesChildren = ReactElement | null;

interface ProtectedRoutesProps {
  children: ProtectedRoutesChildren;
  isAuthAdmin: boolean;
}

const ProtectedRoute : React.FC<ProtectedRoutesProps> = ({ children, isAuthAdmin }) => {
  const { pathname } = useLocation();
  const { user } = useContext(authContext) as UserContext;

  if (!user) {
    return <Navigate to="/auth/login" replace state={{ currentLocation: pathname }} />;
  }

  if (isAuthAdmin) {
    if (user?.role !== 'admin') {
      return <Navigate to="/auth/login" replace state={{ currentLocation: pathname }} />;
    }
  }
  if (!isAuthAdmin) {
    if (user?.role !== 'user') {
      return <Navigate to="/auth/login" replace state={{ currentLocation: pathname }} />;
    }
  }
  return children;
};
interface LoginProtectedRoutesProps {
  children: ProtectedRoutesChildren;
}
const LoginProtectedRoute: React.FC<LoginProtectedRoutesProps> = ({ children }) => {
  const location = useLocation();

  const { user } = useContext(authContext) as UserContext;
  if (user) {
    return <Navigate to="/" replace state={{ currentLocation: location.pathname }} />;
  }
  return children;
};

export { ProtectedRoute, LoginProtectedRoute };
