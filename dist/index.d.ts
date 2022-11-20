/// <reference types="react" />
import * as react_query from 'react-query';
import { UseMutationResult } from 'react-query';
import * as React from 'react';
import React__default from 'react';
import * as axios from 'axios';
import { AxiosResponse, AxiosError, AxiosInstance } from 'axios';

interface InterfaceGlobalStateAction {
    type: 'SET_USER';
    payload: object | string;
}

declare const Hook: {
    App: (BACKEND_INSTANCE: axios.AxiosInstance, GlobalDispatchContext: React.Context<React.Dispatch<InterfaceGlobalStateAction>>) => {
        response: axios.AxiosResponse<any, any> | undefined;
        mutate: react_query.UseMutateFunction<unknown, unknown, void, unknown>;
    };
    AppLogin: (BACKEND_INSTANCE: axios.AxiosInstance) => {
        response: axios.AxiosResponse<any, any> | undefined;
        mutate: react_query.UseMutateFunction<unknown, unknown, void, unknown>;
    };
    Logout: (BACKEND_INSTANCE: axios.AxiosInstance, FRONTEND_AUTH: string) => {
        mutate: react_query.UseMutateFunction<unknown, unknown, void, unknown>;
    };
};

interface TemplateFormProps {
    children: React__default.ReactNode | React__default.ReactNode[];
}
declare function TemplateForm(props: TemplateFormProps): JSX.Element;

interface TemplateLoadingProps {
    children: React__default.ReactNode | React__default.ReactNode[];
}
declare function TemplateLoading(props: TemplateLoadingProps): JSX.Element;

interface TemplateTableProps {
    children: React__default.ReactNode | React__default.ReactNode[];
}
declare function TemplateTable(props: TemplateTableProps): JSX.Element;

declare const Template: {
    Form: typeof TemplateForm;
    Loading: typeof TemplateLoading;
    Table: typeof TemplateTable;
};

interface ButtonAddProps {
    href: string;
}
declare function ButtonAdd(props: ButtonAddProps): JSX.Element;

interface ButtonDeleteProps {
    onClick: React__default.MouseEventHandler<HTMLButtonElement>;
}
declare function ButtonDelete(props: ButtonDeleteProps): JSX.Element;

interface ButtonEditProps {
    href: string;
}
declare function ButtonEdit(props: ButtonEditProps): JSX.Element;

declare const Button: {
    Add: typeof ButtonAdd;
    Delete: typeof ButtonDelete;
    Edit: typeof ButtonEdit;
};

interface ButtonGroupActionProps {
    onEdit: string;
    onDelete: React__default.MouseEventHandler<HTMLButtonElement>;
}
declare function ButtonGroupAction(props: ButtonGroupActionProps): JSX.Element;

declare const ButtonGroup: {
    Action: typeof ButtonGroupAction;
};

interface CardAddProps {
    children: React__default.ReactNode | React__default.ReactNode[];
    title: string;
    href: string;
}
declare function CardAdd(props: CardAddProps): JSX.Element;

interface CardLoginProps {
    children: React__default.ReactNode | React__default.ReactNode[];
}
declare function CardLogin(props: CardLoginProps): JSX.Element;

interface CardProps {
    children: React__default.ReactNode | React__default.ReactNode[];
    title: string;
}
declare function Card(props: CardProps): JSX.Element;
declare const _default$1: typeof Card & {
    Add: typeof CardAdd;
    Login: typeof CardLogin;
};

declare function SpinnerLarge(): JSX.Element;

declare function SpinnerSmall(): JSX.Element;

declare const Spinner: {
    Large: typeof SpinnerLarge;
    Small: typeof SpinnerSmall;
};

interface TableActionProps {
    columns: {
        id: string;
        name: string;
    }[];
    rows: {
        [keys: string]: string;
    }[];
    onDelete: UseMutationResult<AxiosResponse, AxiosError, unknown, void>;
    onEdit: string;
}
declare function TableAction(props: TableActionProps): JSX.Element;

interface TableProps {
    columns: {
        id: string;
        name: string;
    }[];
    rows: {
        [keys: string]: string;
    }[];
}
declare function Table(props: TableProps): JSX.Element;
declare const _default: typeof Table & {
    Action: typeof TableAction;
};

interface NavbarProps {
    brand: string;
    username: string;
    axios: AxiosInstance;
    auth: string;
}
declare function Navbar(props: NavbarProps): JSX.Element;

interface SidebarProps {
    data: {
        id: string;
        link: string;
        label: string;
    }[];
}
declare function Sidebar(props: SidebarProps): JSX.Element;

export { Button, ButtonGroup, _default$1 as Card, Hook, Navbar, Sidebar, Spinner, _default as Table, Template };
