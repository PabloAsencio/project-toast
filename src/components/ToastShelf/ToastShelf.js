import React from 'react';

import Toast from '../Toast';
import {ToastContext} from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.use(ToastContext);

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification">
      {toasts.map(({id, variant, handleDismiss, message}) => {
        return (
          <li className={styles.toastWrapper} key={id} >
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
