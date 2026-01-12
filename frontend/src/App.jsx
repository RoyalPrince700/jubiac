import './app.css';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState, useCallback, useMemo } from 'react';
import SummaryApi from './common';
import Context from './context';
import { SocketProvider } from './context/SocketContext';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import ScrollToTop from './components/ScrollTop';
import { matchPath } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [cartProductCount, setCartProductCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);

  const shouldHideHeaderFooter = location.pathname.startsWith('/admin-overview') ||
    ['/login', '/sign-up', '/token-verification', '/forgot-password', '/verify-email'].includes(location.pathname) ||
    location.pathname.startsWith('/reset-password/');

  

  // Fetch user details
  const fetchUserDetails = useCallback(async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: 'include',
      });

      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      }
    } catch (error) {
      console.error('Failed to fetch user details:', error.message);
    }
  }, [dispatch]);

  // Fetch cart product count
  const fetchUserAddToCart = useCallback(async () => {
    try {
      const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method,
        credentials: 'include',
      });

      const dataApi = await dataResponse.json();
      setCartProductCount(dataApi?.data?.count);
    } catch (error) {
      console.error('Failed to fetch cart product count:', error.message);
    }
  }, []);

  // Fetch notification count
  const fetchUserNotification = useCallback(async () => {
    try {
      const dataResponse = await fetch(SummaryApi.countUnreadNotifications.url, {
        method: SummaryApi.countUnreadNotifications.method,
        credentials: 'include',
      });

      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        setNotificationCount(dataApi.unreadCount);
      } else {
        console.error('Failed to fetch notification count:', dataApi.message);
      }
    } catch (error) {
      console.error('Failed to fetch notification count:', error.message);
    }
  }, []);

  // Fetch necessary data on component render
  useEffect(() => {
    fetchUserDetails();
    fetchUserAddToCart();
    fetchUserNotification();
  }, [fetchUserDetails, fetchUserAddToCart, fetchUserNotification]);

  // Log notification count updates
  useEffect(() => {
    console.log('Notification Count Updated:', notificationCount);
  }, [notificationCount]);

  const signInWithGoogle = useCallback(() => {
    const backendBase = import.meta.env.VITE_APP_BACKEND_URI;
    if (!backendBase) {
      console.error(
        '[Auth] Missing VITE_APP_BACKEND_URI. Cannot start Google sign-in without the backend base URL.'
      );
      return;
    }
    window.location.href = `${backendBase.replace(/\/$/, '')}/api/auth/google`;
  }, []);

  const contextValue = useMemo(
    () => ({
      fetchUserDetails,
      cartProductCount,
      notificationCount,
      fetchUserAddToCart,
      fetchUserNotification,
      signInWithGoogle,
    }),
    [cartProductCount, notificationCount, fetchUserAddToCart, fetchUserNotification, signInWithGoogle]
  );

  return (
    <>
      <ScrollToTop />

      <SocketProvider>
        <Context.Provider value={contextValue}>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            limit={1}
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
            newestOnTop={true}
          />

          {!shouldHideHeaderFooter && <Header />}
          <main className={`min-h-[calc(100vh-120px)] pt-0`}>
            <Outlet />
          </main>
          {!shouldHideHeaderFooter && <Footer />}
        </Context.Provider>
      </SocketProvider>
    </>
  );
}

export default App;
