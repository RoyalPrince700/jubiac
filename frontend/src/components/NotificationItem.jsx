// NotificationItem.js
import React from 'react';
import { MdMarkEmailRead } from 'react-icons/md';

const NotificationItem = ({ notification, markAsRead }) => {
  const { _id, type, message, isRead, createdAt } = notification;

  return (
    <div
      className={`w-full bg-white shadow-lg rounded-lg border ${
        isRead ? 'border-gray-200' : 'border-yellow-500'
      } my-4 p-4`}
    >
      <h2 className="text-base font-medium text-gray-800">{type}</h2>
      <p className="text-sm text-gray-600">{message}</p>
      <p className="text-xs text-gray-400 mt-2">{new Date(createdAt).toLocaleString()}</p>
      {!isRead && (
        <div className="mt-3 text-right">
          <button
            className="text-yellow-500 hover:text-yellow-600"
            onClick={() => markAsRead(_id)}
          >
            <MdMarkEmailRead size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationItem;

