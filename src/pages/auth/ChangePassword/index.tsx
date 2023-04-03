import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ReactComponent as EyeSlashIcon } from '@assets/icons/eye_slash_icon.svg';
import { ReactComponent as EyeIcon } from '@assets/icons/eye_icon.svg';
import Input from '@components/Input';
import Button from '@components/Button';
import AuthLayout from '@layout/AuthLayout';
import { useAuthStore } from '@store/auth';
import ResultPopup from '@components/ResultPopup';

export const changePasswordFormSchema: yup.ObjectSchema<ChangePasswordForm> =
  yup.object().shape({
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Confirm Password is not equal as Password')
  });

interface ChangePasswordForm {
  password: string;
  confirmPassword: string;
}

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ChangePasswordForm>({
    resolver: yupResolver(changePasswordFormSchema)
  });
  const { createPassword } = useAuthStore();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [tokenValid, setTokenValid] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setTokenValid(Boolean(token));
  }, [token]);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmShowPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit: Parameters<typeof handleSubmit>[0] = async ({ password }) => {
    await createPassword(password, token)
      .then(() => {
        navigate('/create-password-board');
      })
      .catch(() => {
        setError('Failed to create password');
      });
  };

  const handleBack = () => {
    navigate('/signin');
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="-mt-40 mb-10 text-primary text-5xl font-bold">
          Create new password.
        </div>
        <div className="w-min">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center py-5 px-6 border rounded-3xl">
            <div className="text-2xl font-bold mb-5 mr-auto whitespace-nowrap">
              Create here a new password:
            </div>

            <Input
              className="w-full mb-5"
              adornmentPosition="end"
              adornment={
                <span
                  className="w-4 h-4 block cursor-pointer text-blue-bluewood"
                  onClick={handleShowPassword}>
                  {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </span>
              }
              placeholder="New Password"
              error={errors.password?.message}
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
            />

            <Input
              className="w-full mb-5"
              adornmentPosition="end"
              adornment={
                <span
                  className="w-4 h-4 block cursor-pointer text-blue-bluewood"
                  onClick={handleConfirmShowPassword}>
                  {showConfirmPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </span>
              }
              placeholder="Confirm New Password"
              error={errors.confirmPassword?.message}
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword', { required: true })}
            />

            <Button
              type="submit"
              variant="contained"
              color="success"
              className="text-black">
              Create new password
            </Button>
          </form>
        </div>
        {!tokenValid && (
          <ResultPopup
            message="Token is not detected"
            variant="danger"
            isOpen
            onClose={handleBack}
          />
        )}
        {error && (
          <ResultPopup
            message={error}
            variant="danger"
            isOpen
            onClose={() => setError('')}
          />
        )}
      </div>
    </AuthLayout>
  );
};

export default ChangePassword;
