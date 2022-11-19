/// <reference types="react" />
declare const Hook: {
    App: (BACKEND_INSTANCE: import("axios").AxiosInstance, GlobalDispatchContext: import("react").Context<import("react").Dispatch<import("../interfaces/state").InterfaceGlobalStateAction>>) => {
        response: import("axios").AxiosResponse<any, any> | undefined;
        mutate: import("react-query").UseMutateFunction<unknown, unknown, void, unknown>;
    };
    AppLogin: (BACKEND_INSTANCE: import("axios").AxiosInstance) => {
        response: import("axios").AxiosResponse<any, any> | undefined;
        mutate: import("react-query").UseMutateFunction<unknown, unknown, void, unknown>;
    };
    Logout: (BACKEND_INSTANCE: import("axios").AxiosInstance, FRONTEND_AUTH: string) => {
        mutate: import("react-query").UseMutateFunction<unknown, unknown, void, unknown>;
    };
};
export default Hook;
