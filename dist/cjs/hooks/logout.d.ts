import type { UseMutateFunction } from '@tanstack/react-query';
import type { AxiosInstance } from 'axios';
type HookLogoutFn = (BACKEND_INSTANCE: AxiosInstance, FRONTEND_AUTH: string) => {
    mutate: UseMutateFunction;
};
declare const HookLogout: HookLogoutFn;
export default HookLogout;
