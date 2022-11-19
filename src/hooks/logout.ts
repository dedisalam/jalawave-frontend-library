import { setLogger, useMutation } from 'react-query';
import type { AxiosInstance } from 'axios';
import type { UseMutateFunction } from 'react-query';

type HookLogoutFn = (BACKEND_INSTANCE: AxiosInstance, FRONTEND_AUTH: string) => {
  mutate: UseMutateFunction
};
const HookLogout: HookLogoutFn = (BACKEND_INSTANCE, FRONTEND_AUTH) => {
  setLogger({ error: () => {}, warn: () => {}, log: () => {} });

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
