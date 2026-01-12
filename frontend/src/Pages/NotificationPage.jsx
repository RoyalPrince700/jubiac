// NotificationPage.js
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import NotificationItem from '../components/NotificationItem';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Notifications
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.getNotification.url, {
        method: SummaryApi.getNotification.method,
        credentials: 'include',
      });
      const result = await response.json();

      if (result.success) {
        setNotifications(result.notifications);
      } else {
        toast.error(result.message || 'Failed to load notifications.');
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
      toast.error('An error occurred while fetching notifications.');
    } finally {
      setLoading(false);
    }
  };

  // Mark Single Notification as Read
  const markAsRead = async (id) => {
    try {
      const response = await fetch(SummaryApi.markAsRead.url, {
        method: SummaryApi.markAsRead.method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notificationIds: [id] }),
      });
      const result = await response.json();

      if (result.success) {
        toast.success('Notification marked as read.');
        setNotifications((prev) =>
          prev.map((notif) =>
            notif._id === id ? { ...notif, isRead: true } : notif
          )
        );
      } else {
        toast.error(result.message || 'Failed to mark notification as read.');
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
      toast.error('An error occurred while updating the notification.');
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-[100px] lg:mt-[120px]">
      <h1 className="text-2xl font-bold mb-5">Notifications</h1>
      <div className="text-center text-lg">
        {notifications.length === 0 && !loading && (
          <p className="bg-white py-5 text-gray-500">No notifications available.</p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2">
        {loading
          ? Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className="w-full bg-slate-200 h-24 border border-slate-300 my-1 animate-pulse rounded"
              ></div>
            ))
          : notifications.map((notification) => (
              <NotificationItem
                key={notification._id}
                notification={notification}
                markAsRead={markAsRead}
              />
            ))}
      </div>
    </div>
  );
};

export default NotificationPage;
