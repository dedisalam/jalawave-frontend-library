import { useState } from 'react';
import { setLogger, useMutation } from 'react-query';
import type { UseMutateFunction } from 'react-query';
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

type HookAppLoginFn = (BACKEND_INSTANCE: AxiosInstance) => {
  response: AxiosResponse | undefined,
  mutate: UseMutateFunction
};
const HookAppLogin: HookAppLoginFn = (BACKEND_INSTANCE) => {
  const [response, setResponse] = useState<AxiosResponse>();

  setLogger({ error: () => {}, warn: () => {}, log: () => {} });
  const onSuccess = (res: AxiosResponse): void => {
    setResponse(res);
  };
  const onError = (err: AxiosError): void => {
    setResponse(err.response);
  };
  const mutation = useMutation(
    async () => BACKEND_INSTANCE.get('/'),
    { onSuccess, onError },
  );

  return {
    response,
    mutate: mutation.mutate,
  };
};

export default HookAppLogin;
