import type { UseMutateFunction } from 'react-query';
import type { AxiosInstance, AxiosResponse } from 'axios';
type HookAppLoginFn = (BACKEND_INSTANCE: AxiosInstance) => {
    response: AxiosResponse | undefined;
    mutate: UseMutateFunction;
};
declare const HookAppLogin: HookAppLoginFn;
export default HookAppLogin;
