import { useEffect } from 'react';
import ErrorType from '@/constants/errors';

function ErrorNotification({ error_code, onTimeout }) {
  const message = ErrorType[error_code] || null;

  useEffect(() => {
    if (message === null) {
      return undefined;
    }

    const timer = setTimeout(() => {
      onTimeout?.();
    }, 1300);

    return () => {
      clearTimeout(timer);
    };
  }, [message, onTimeout]);

  if (message === null) {
    return null;
  }

  return <div className="ErrorNotification">{message}</div>;
}

export default ErrorNotification;
