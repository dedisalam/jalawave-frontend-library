import { useMutation } from '@tanstack/react-query';
import type { UseMutateFunction } from '@tanstack/react-query';
import type { AxiosInstance } from 'axios';

type HookLogoutFn = (BACKEND_INSTANCE: AxiosInstance, FRONTEND_AUTH: string) => {
  mutate: UseMutateFunction
};
const HookLogout: HookLogoutFn = (BACKEND_INSTANCE, FRONTEND_AUTH) => {
  const onSuccess = (): void => {
    window.location.href = FRONTEND_AUTH;
  };
  const mutation = useMutation(
    async () => BACKEND_INSTANCE.delete('/logout'),
    { onSuccess },
  );

  return {
    mutate: mutation.mutate,
  };
};

export default HookLogout;
