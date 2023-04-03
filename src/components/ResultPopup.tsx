import React from 'react';
import Modal from 'react-modal';
import { ReactComponent as CircleCheckIcon } from '@assets/icons/circle_check_icon.svg';
import { ReactComponent as CircleCloseIcon } from '@assets/icons/circle_close_icon.svg';
import clsx from 'clsx';
import Button from '@components/Button';

type Props = {
  message: string;
  variant?: 'success' | 'danger';
  isOpen: boolean;
  onClose?: () => void;
};

const ResultPopup: React.FC<Props> = ({
  message,
  isOpen,
  onClose,
  variant
}) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="fixed w-screen h-screen top-0 bg-[#000b] z-20 flex justify-center items-center"
      className="p-10 rounded-2xl bg-white flex flex-col items-center justify-center focus:outline-none"
      onRequestClose={onClose}>
      {variant === 'success' ? (
        <CircleCheckIcon className="w-80 h-80 text-success" />
      ) : (
        <CircleCloseIcon className="w-80 h-80 text-danger" />
      )}
      <p className={clsx('font-bold text-lg', `text-${variant}`)}>{message}</p>
      {onClose && (
        <Button
          variant="contained"
          color={variant}
          size="small"
          className="mt-5 px-6 w-fit min-w-fit !ring-transparent"
          onClick={onClose}>
          Ok
        </Button>
      )}
    </Modal>
  );
};

export default ResultPopup;
