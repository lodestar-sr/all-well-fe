import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ReactComponent as EyeSlashIcon } from '@assets/icons/eye_slash_icon.svg';
import { ReactComponent as EyeIcon } from '@assets/icons/eye_icon.svg';
import Input from '@components/Input';
import Button from '@components/Button';
import AuthLayout from '@layout/AuthLayout';
import { useAuthStore } from '@store/auth';

interface LoginForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>();
  const { signIn } = useAuthStore();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit: Parameters<typeof handleSubmit>[0] = async ({
    email,
    password
  }) => {
    try {
      await signIn(email, password);
    } catch (e: any) {
      console.error(e);
      return;
    }
    navigate('/');
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="-mt-40 mb-10 text-primary text-5xl font-bold">
          Access your test app
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center py-5 px-6 border rounded-3xl">
            <div className="text-2xl font-bold mb-5 mr-auto">
              Insert your credentials
            </div>
            <Input
              type="email"
              className="mb-6 w-full"
              placeholder="Email"
              {...register('email', { required: true })}
            />

            {errors.email && <span>{errors.email.message}</span>}

            <Input
              className="w-full"
              adornmentPosition="end"
              adornment={
                <span
                  className="w-4 h-4 block cursor-pointer text-blue-bluewood"
                  onClick={handleShowPassword}>
                  {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </span>
              }
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
            />

            {errors.password && <span>{errors.password.message}</span>}

            <div className="my-2 mr-auto text-sm font-bold">
              have you forgot your password? click{' '}
              <Link className="underline" to="/forgot-password">
                here
              </Link>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="success"
              className="text-black">
              Log In
            </Button>
          </form>
          <div className="my-2 mr-auto text-lg font-bold">
            You don’t have a profile yet? sign up{' '}
            <Link to="/signup" className="underline">
              here
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
