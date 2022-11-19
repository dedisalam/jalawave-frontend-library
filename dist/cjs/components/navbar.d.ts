/// <reference types="react" />
import type { AxiosInstance } from 'axios';
interface NavbarProps {
    brand: string;
    username: string;
    axios: AxiosInstance;
    auth: string;
}
declare function Navbar(props: NavbarProps): JSX.Element;
export default Navbar;
