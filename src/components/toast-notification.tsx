'use client'

import { useEffect, useState } from 'react'

interface ToastNotificationProps {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  isVisible: boolean;
  onClose: () => void;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
}

export default function ToastNotification({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  actionButton 
}: ToastNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          backgroundColor: 'var(--primary-700)',
          borderLeft: '4px solid var(--primary-500)'
        };
      case 'info':
        return {
          backgroundColor: '#3b82f6',
          borderLeft: '4px solid #2563eb'
        };
      case 'warning':
        return {
          backgroundColor: '#f59e0b',
          borderLeft: '4px solid #d97706'
        };
      case 'error':
        return {
          backgroundColor: '#ef4444',
          borderLeft: '4px solid #dc2626'
        };
      default:
        return {
          backgroundColor: 'var(--primary-700)',
          borderLeft: '4px solid var(--primary-500)'
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'info':
        return 'ℹ️';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      default:
        return '✅';
    }
  };

  return (
    <div className="toast-notification" style={getToastStyles()}>
      <div className="toast-content">
        <div className="toast-main">
          <span className="toast-icon">{getIcon()}</span>
          <span className="toast-message">{message}</span>
        </div>
        <div className="toast-actions">
          {actionButton && (
            <button
              onClick={actionButton.onClick}
              className="toast-action-btn"
            >
              {actionButton.text}
            </button>
          )}
          <button
            onClick={onClose}
            className="toast-close-btn"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}