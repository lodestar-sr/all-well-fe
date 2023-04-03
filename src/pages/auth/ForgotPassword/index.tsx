import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '@components/Input';
import Button from '@components/Button';
import AuthLayout from '@layout/AuthLayout';
import { useAuthStore } from '@store/auth';

interface ForgotPasswordForm {
  email: string;
}

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordForm>();
  const { forgotPassword } = useAuthStore();

  const navigate = useNavigate();

  const onSubmit: Parameters<typeof handleSubmit>[0] = async ({ email }) => {
    try {
      await forgotPassword(email);
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
          Reset your password
        </div>
        <div className="w-min">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center py-5 px-6 border rounded-3xl">
            <div className="text-2xl font-bold mb-5 mr-auto whitespace-nowrap">
              Have you forgot your password?
            </div>
            <div className="text-sm mb-5 mr-auto">
              Do not worry, insert here your email and we will send you a link
              to reset your password.
            </div>
            <Input
              type="email"
              className="mb-6 w-full"
              placeholder="Email"
              {...register('email', { required: true })}
            />

            {errors.email && <span>{errors.email.message}</span>}

            <Button
              type="submit"
              variant="contained"
              color="success"
              className="text-black">
              Reset your password
            </Button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
