import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EyeSlashIcon } from '@assets/icons/eye_slash_icon.svg';
import { ReactComponent as EyeIcon } from '@assets/icons/eye_icon.svg';
import Button from '@components/Button';
import Input from '@components/Input';
import AuthLayout from '@layout/AuthLayout';
import { useAuthStore } from '@store/auth';

interface RegistrationForm {
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationForm>();
  const { signUp } = useAuthStore();

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
      await signUp(email, password);
    } catch (e: any) {
      console.error(e);
      return;
    }

    navigate('/signup-board');
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="-mt-40 mb-10 text-primary text-5xl font-bold">
          Sign-up to your test app
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center py-5 px-6 border rounded-3xl">
            <div className="text-2xl font-bold mb-5 mr-auto">
              Chose a user-id and a password
            </div>
            <Input
              type="email"
              className="mb-6 w-full"
              placeholder="Email"
              {...register('email', { required: true })}
            />

            {errors.password && <span>{errors.password.message}</span>}

            <Input
              className="w-full mb-9"
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

            <Button
              type="submit"
              variant="contained"
              color="success"
              className="text-black">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
