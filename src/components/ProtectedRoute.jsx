import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return(
      <>
      <div>
      <Navigate to='/login' />
      </div>
      </>
    );
  }
  return children;
};

export default ProtectedRoute;