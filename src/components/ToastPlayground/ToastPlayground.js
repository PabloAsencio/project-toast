import React from 'react';

import Button from '../Button';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const id = crypto.randomUUID();
    const handleDismiss = () => {
      setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
    }
    const newToast = {
      id,
      handleDismiss, 
      variant,
      message
    };
    const newToasts = [...toasts, newToast];
    setToasts(newToasts);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts}/>

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" required className={styles.messageInput} value={message} onChange={(event)=> setMessage(event.target.value)}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            

            {VARIANT_OPTIONS.map((variantOption) => {
              const id = `variant-${variantOption}`;
              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={variantOption}
                    onChange={(event) => setVariant(event.target.value)}
                    checked={variant === variantOption}
                  />
                  {variantOption}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
