import styles from './admin-edit-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_Edit_Body_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-edit-header-parts-and-templates
 */
export const Admin_Edit_Body_Part = ({ className }: Admin_Edit_Body_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminEditBodyPart-style']}>
                <table>
                    <tbody className={styles['tbody-AdminEditBodyPart-style']}>
                        <tr
                            className={classNames(
                                styles['tr-breSearchTablePart-style'],
                                styles['tr-AdminEditTableHeaderPart-style']
                            )}
                        >
                            <th className={styles['th-AdminEditBodyPart-style']}>Catalog</th>
                            <th className={styles['th-AdminEditBodyPart-style']}>Common Name</th>
                            <th className={styles['th-AdminEditBodyPart-style']}>Mod</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
