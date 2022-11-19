import { useContext, useState } from 'react';
import { setLogger, useMutation } from 'react-query';
import type { InterfaceGlobalStateAction } from '../interfaces/state';
import type { UseMutateFunction } from 'react-query';
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

type HookAppFn = (
  BACKEND_INSTANCE: AxiosInstance,
  GlobalDispatchContext: React.Context<React.Dispatch<InterfaceGlobalStateAction>>
) => {
  response: AxiosResponse | undefined
  mutate: UseMutateFunction
};
const HookApp: HookAppFn = (BACKEND_INSTANCE, GlobalDispatchContext) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const dispatch = useContext(GlobalDispatchContext);

  setLogger({ error: () => {}, warn: () => {}, log: () => {} });

  const onSuccess = (res: AxiosResponse<{ user: object }>): void => {
    dispatch({ type: 'SET_USER', payload: res.data.user });
    setResponse(res);
  };
  const onError = (err: AxiosError): void => {
    setResponse(err.response);
  };
  const mutation = useMutation(
    async (): Promise<AxiosResponse<{ user: object; }>> => BACKEND_INSTANCE.get('/'),
    { onSuccess, onError },
  );

  return {
    response,
    mutate: mutation.mutate,
  };
};

export default HookApp;
