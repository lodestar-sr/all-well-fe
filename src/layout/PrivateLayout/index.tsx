import React, { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DarkLogo from '@assets/icons/logo_dark.svg';
import { useAuthStore } from '@store/auth';

type Props = PropsWithChildren;

const PrivateLayout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { getMyProfile, signOut } = useAuthStore();

  useEffect(() => {
    getMyProfile().catch((e) => {
      console.error(e);
      navigate('/signin');
      signOut();
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-14 py-4 flex justify-start">
        <img src={DarkLogo} alt="logo" />
      </div>
      <div className="flex-1 flex items-center px-12 pt-4 pb-2">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
