import styles from './admin-page-header.module.scss';
import classNames from 'classnames';

export interface AdminPageHeaderProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-page-headers-and-templates
 */
export const AdminPageHeader = ({
    className,
    children = 'AdminPageHeader',
}: AdminPageHeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.style1}>
                <span>
                    <h1 className={styles.AdminText}>
                        ADMIN PAGE
                        <span className={styles.padding}>
                            <button className={styles.Settings}>Home</button>
                            <button className={styles.Settings}>SETTINGS</button>
                            <span className={styles.user}>LASTNAME, FIRSTNAME </span>
                        </span>
                    </h1>
                </span>
            </div>
            <div className={styles.style2} />
        </div>
    );
};
