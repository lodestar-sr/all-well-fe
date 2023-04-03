import Button from '@components/Button';
import AuthLayout from '@layout/AuthLayout';
import { useNavigate } from 'react-router-dom';

const SignInBoard = () => {
  const navigate = useNavigate();

  const handleGoToLogin = async () => {
    navigate('/signin');
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="mb-40 py-8 px-6 rounded-lg border border-superlight text-2xl font-bold text-black">
          Congrats! you have successfully signed-up!
        </div>
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="text-black px-5"
          onClick={handleGoToLogin}>
          Click here to log-in into your app!
        </Button>
      </div>
    </AuthLayout>
  );
};

export default SignInBoard;
