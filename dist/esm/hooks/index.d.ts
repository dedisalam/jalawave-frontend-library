declare const Hook: {
    Logout: (BACKEND_INSTANCE: import("axios").AxiosInstance, FRONTEND_AUTH: string) => {
        mutate: import("@tanstack/react-query").UseMutateFunction<unknown, unknown, void, unknown>;
    };
};
export default Hook;
