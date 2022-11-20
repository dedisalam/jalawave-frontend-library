/// <reference types="react" />
import type { UseMutationResult } from 'react-query';
import type { AxiosError, AxiosResponse } from 'axios';
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
export default TableAction;
