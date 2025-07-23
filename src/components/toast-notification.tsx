'use client'

import { useEffect } from 'react'

interface ToastNotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function ToastNotification({ message, isVisible, onClose }: ToastNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="toast-notification">
      <div className="toast-content">
        <span className="toast-icon">✅</span>
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
}