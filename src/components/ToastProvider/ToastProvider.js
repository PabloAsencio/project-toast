import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (variant, message) => {
    const id = crypto.randomUUID();
    const newToast = {
      variant, 
      message, 
      id, 
    };
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
  };

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }


  return (
    <ToastContext value={{toasts, createToast, dismissToast }} >
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
