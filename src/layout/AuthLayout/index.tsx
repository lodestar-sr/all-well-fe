import React, { PropsWithChildren } from 'react';
import DarkLogo from '@assets/icons/logo_dark.svg';
import HeroBg from '@assets/icons/hero_bg.svg';

type Props = PropsWithChildren;

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-14 py-4 flex justify-start">
        <img src={DarkLogo} alt="logo" />
      </div>
      <div className="flex-1 flex items-center px-12 pt-4 pb-2">
        <div className="flex-1">
          <img src={HeroBg} alt="logo" />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
