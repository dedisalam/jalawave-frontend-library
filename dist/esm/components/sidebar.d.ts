/// <reference types="react" />
interface SidebarProps {
    data: {
        id: string;
        link: string;
        label: string;
    }[];
}
declare function Sidebar(props: SidebarProps): JSX.Element;
export default Sidebar;
