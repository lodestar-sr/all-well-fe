import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import DarkLogo from '@assets/icons/logo_dark.svg';
import Button from '@components/Button';

type Props = PropsWithChildren;

const SignOutBoard: React.FC<Props> = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-14 py-4 flex justify-start">
        <img src={DarkLogo} alt="logo" />
      </div>
      <div className="flex-1 flex items-center px-12 pt-4 pb-2">
        <div className="flex-1 w-full mx-auto flex flex-col justify-center items-center">
          <div className="mb-5 text-primary text-5xl font-bold text-center">
            You logged out!
          </div>
          <Button
            type="submit"
            variant="contained"
            color="success"
            className="w-fit mt-5 px-5 text-black !text-sm"
            size="small"
            onClick={handleLogout}>
            Click here to Access your app again!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignOutBoard;
