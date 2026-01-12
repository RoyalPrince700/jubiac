import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Context from '../context';
import SummaryApi from '../common';

function AuthCallback() {
  const { fetchUserDetails } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    const handleAuth = async () => {
      if (token) {
        try {
          // The token is already set as a cookie by the backend redirect
          // But we can also store it in localStorage if the app uses it for Bearer tokens
          // Looking at App.jsx, it uses credentials: 'include' which means it relies on cookies.
          
          // Fetch user profile to get user data and update Redux store
          await fetchUserDetails();
          navigate('/');
        } catch (error) {
          console.error('Auth callback error:', error);
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    };

    handleAuth();
  }, [location, fetchUserDetails, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  );
}

export default AuthCallback;

