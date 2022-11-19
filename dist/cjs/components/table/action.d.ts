/// <reference types="react" />
interface TableActionProps {
    columns: {
        id: string;
        name: string;
    }[];
    rows: {
        [keys: string]: string;
    }[];
    href: string;
}
declare function TableAction(props: TableActionProps): JSX.Element;
export default TableAction;
