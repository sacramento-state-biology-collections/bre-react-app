import styles from './admin-panel-view.module.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Admin_User_Header_Part } from '../admin-user-header-part/admin-user-header-part';
import { Admin_Panel_Body_Part } from '../admin-panel-body-part/admin-panel-body-part';
import { Table_Loading_Img_Part } from '../table-loading-img-part/table-loading-img-part';

export interface AdminPanelViewProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_AdminEditView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-panel-views-and-templates
 */
export const AdminPanelView = ({
    className,
    toggle_WelcomeView,
    toggle_AdminEditView,
}: AdminPanelViewProps) => {
    const [bool_Loading, set_Loading] = useState<boolean>(true);

    function toggle_LoadingTrue() {
        set_Loading(true);
    }
    function toggle_LoadingFalse() {
        set_Loading(false);
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div hidden={bool_Loading}>
                <Table_Loading_Img_Part />
            </div>
            <Admin_User_Header_Part toggle_WelcomeView={toggle_WelcomeView} />
            <Admin_Panel_Body_Part
                toggle_LoadingTrue={toggle_LoadingTrue}
                toggle_LoadingFalse={toggle_LoadingFalse}
                toggle_AdminEditView={toggle_AdminEditView}
            />
        </div>
    );
};
