import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

const ButtonClasses = {
  variant: {
    contained: {
      primary: 'bg-primary text-white border-2 border-primary',
      secondary: '',
      success: 'bg-success text-white border-2 border-success',
      danger: 'bg-danger text-white border-2 border-danger'
    },
    outlined: {
      primary: 'bg-white text-primary font-medium border-2 border-primary',
      secondary: '',
      success: '',
      danger: 'bg-white text-danger font-medium border-2 border-danger'
    }
  },
  size: {
    small: 'min-w-[278px] h-10',
    large: 'min-w-[327px] h-[70px]'
  }
};

type Props = ButtonHTMLAttributes<any> & {
  className?: string;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'large';
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      className = '',
      variant = 'contained',
      color = 'primary',
      size = 'large',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'focus:outline-none focus:ring-2 focus:ring-primary-hover rounded-3xl px-2 py-1 rounded-[50px] hover:opacity-70 font-medium text-xl',
          ButtonClasses.size[size],
          ButtonClasses.variant[variant][color],
          className
        )}
        {...rest}
      />
    );
  }
);

export default Button;
