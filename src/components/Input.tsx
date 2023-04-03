import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

type Props = InputHTMLAttributes<any> & {
  className?: string;
  inputClassName?: string;
  adornment?: React.ReactNode;
  adornmentPosition?: 'start' | 'end';
  size?: 'small';

  // Display error messages
  error?: string;
};

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      adornment,
      adornmentPosition,
      size = 'small',
      error,
      ...rest
    },
    ref
  ) => {
    const hasError = Boolean(error);

    return (
      <div
        className={clsx('relative', hasError && styles.inputError, className)}>
        <input
          ref={ref}
          className={clsx(
            styles.inputBase,
            size === 'small' ? 'h-9' : 'h-14',
            adornmentPosition === 'start' && 'pl-12',
            adornmentPosition === 'end' && 'pr-12',
            inputClassName
          )}
          {...rest}
        />
        {adornment && (
          <span
            className={clsx(
              'absolute top-1/2 -translate-y-1/2',
              adornmentPosition === 'start' ? 'left-4' : 'right-4'
            )}>
            {adornment}
          </span>
        )}

        {error && <div className="text-red-600 mt-1">{error}</div>}
      </div>
    );
  }
);

export default Input;
