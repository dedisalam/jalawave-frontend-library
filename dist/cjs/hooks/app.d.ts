/// <reference types="react" />
import type { InterfaceGlobalStateAction } from '../interfaces/state';
import type { UseMutateFunction } from 'react-query';
import type { AxiosInstance, AxiosResponse } from 'axios';
type HookAppFn = (BACKEND_INSTANCE: AxiosInstance, GlobalDispatchContext: React.Context<React.Dispatch<InterfaceGlobalStateAction>>) => {
    response: AxiosResponse | undefined;
    mutate: UseMutateFunction;
};
declare const HookApp: HookAppFn;
export default HookApp;
