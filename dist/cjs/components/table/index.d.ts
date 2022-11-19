/// <reference types="react" />
import TableAction from './action';
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
export default _default;
