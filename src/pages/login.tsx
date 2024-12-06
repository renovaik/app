import { LoginForm } from '@/components/auth/login-form';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';

export default function LoginPage() {
  const token = useAuthStore((state) => state.token);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9FE800] to-[#111216] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}