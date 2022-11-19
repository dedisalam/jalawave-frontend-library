import type { AxiosInstance } from 'axios';
import type { UseMutateFunction } from 'react-query';
type HookLogoutFn = (BACKEND_INSTANCE: AxiosInstance, FRONTEND_AUTH: string) => {
    mutate: UseMutateFunction;
};
declare const HookLogout: HookLogoutFn;
export default HookLogout;
