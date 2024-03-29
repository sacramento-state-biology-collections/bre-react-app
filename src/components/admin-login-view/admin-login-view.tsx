import styles from './admin-login-view.module.scss';
import classNames from 'classnames';
import ip_addresses from '../../ip_addresses.json';
import { Admin_Login_Part } from '../admin-login-part/admin-login-part';
import CryptoJS from 'crypto-js';

export interface AdminLoginViewProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_AdminPanelView: () => void;
    update_LoginData: (LoginData: any) => Promise<void>;
    get_LoginData: () => any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-login-views-and-templates
 */
export const AdminLoginView = ({
    className,
    toggle_WelcomeView,
    toggle_AdminPanelView,
    update_LoginData,
    get_LoginData,
}: AdminLoginViewProps) => {
    const ipAddress = ip_addresses.ip;
    function attempt_Login() {
        let temp_LoginData = get_LoginData();
        temp_LoginData.password = CryptoJS.HmacMD5(
            temp_LoginData.password,
            CryptoJS.enc.Utf8.parse(temp_LoginData.key)
        ).toString();
        console.log(temp_LoginData.password);
        temp_LoginData.password = CryptoJS.AES.encrypt(
            temp_LoginData.password,
            CryptoJS.enc.Utf8.parse(temp_LoginData.key),
            { mode: CryptoJS.mode.ECB }
        ).toString();
        delete temp_LoginData.key;
        fetch(`http://${ipAddress}:9001/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(temp_LoginData),
        }).then((response) => {
            if (response.status === 200) {
                toggle_AdminPanelView();
            } else {
                alert('Login failed');
            }
        });
    }

    return (
        <div className={classNames(styles.root, className)}>
            <Admin_Login_Part
                toggle_WelcomeView={toggle_WelcomeView}
                update_LoginData={update_LoginData}
                attempt_Login={attempt_Login}
            />
        </div>
    );
};
