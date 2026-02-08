import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);


  const handleEscape = React.useCallback(()=> setToasts([]), []);

  useEscapeKey(handleEscape);
  
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
