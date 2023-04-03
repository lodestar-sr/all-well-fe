import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrivateLayout from '@layout/PrivateLayout';
import Button from '@components/Button';
import { useAuthStore } from '@store/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const [colorStatus, setColorStatus] = useState<'success' | 'danger'>(
    'success'
  );
  const { signOut } = useAuthStore();

  const handleLogout = () => {
    navigate('/signout-board');
    signOut();
  };

  const handleToggleColor = () => {
    setColorStatus(colorStatus === 'success' ? 'danger' : 'success');
  };

  return (
    <PrivateLayout>
      <div className="w-full mx-auto flex flex-col justify-center w-2/3">
        <div className="mb-10 text-primary text-5xl font-bold text-center">
          This is your beautiful test app!
        </div>
        <div className="px-20 py-10 flex flex-col justify-center items-center text-center border border-grey-superlight rounded-lg">
          <div className="text-2xl font-bold mb-5 mr-auto">
            This app let’s you change the color of the button below from green
            to red each time you click it! isnt’ that amazing?
          </div>

          <Button
            type="submit"
            variant="contained"
            color={colorStatus}
            className="w-fit px-5 text-black border-0 !ring-transparent"
            onClick={handleToggleColor}>
            Change the color of this button now
          </Button>
        </div>

        <Button
          type="submit"
          variant="contained"
          color="success"
          className="min-w-fit w-fit mt-5 ml-auto px-5 text-black"
          size="small"
          onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </PrivateLayout>
  );
};

export default Dashboard;
