import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { loginUser } from '@/services/auth';
import { useAuthStore } from '@/store/auth';
import type { LoginCredentials } from '@/types/auth';

export function useAuth() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      toast.success('Login realizado com sucesso!');
      navigate('/dashboard');
    },
    onError: () => {
      toast.error('Erro ao realizar login. Verifique suas credenciais.');
    },
  });

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isLoading,
  };
}