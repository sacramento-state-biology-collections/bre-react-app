import styles from './bre-search-header-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Header_PartProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_BreSearchBodyPart: () => void;
    bool_BreSearchBodyPart: boolean;
    clicked: () => void;
    update_CollectionName: (CollectionName: string) => void;
    update_SearchCriteria: (SearchCriteria: string) => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-header-parts-and-templates
 */
export const Bre_Search_Header_Part = ({className, toggle_WelcomeView, toggle_BreSearchBodyPart, bool_BreSearchBodyPart, clicked, update_CollectionName, update_SearchCriteria }: Bre_Search_Header_PartProps) => {
    function run_HeaderEvent() {
        if(bool_BreSearchBodyPart === false) {toggle_BreSearchBodyPart();}
        update_CollectionName((document.getElementsByName('collection')[0] as HTMLSelectElement).value);
        update_SearchCriteria((document.getElementsByName('searchInput')[0] as HTMLInputElement).value);
        clicked();
    }
    
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchHeaderPart-style']}>
                <span className={styles['span-breSearchHeaderPart-style']}>
                    Biology Research Engine
                </span>
                <div className={styles['div1-breSearchHeaderPart-style']}>
                    <button
                        title='Home'
                        className={styles['button-breSearchHeaderPart-style']}
                        onClick={toggle_WelcomeView}
                    >
                        <img
                            alt=""
                            // src="../styles/Home_Button.svg"
                            src="Home_Button.svg"
                            className={styles['img-breSearchHeaderPart-style']}
                        />
                    </button>
                    <input
                        name='searchInput'
                        className={styles['input-breSearchHeaderPart-style']}
                        placeholder="Search All"
                    />
                    <select name='collection' className={styles['select-breSearchHeaderPart-style']}>
                        <option>All</option>
                        <option>Arboretum</option>
                        <option>Fish</option>
                        <option>Green House</option>
                        <option>Herbarium</option>
                        <option>Herps</option>
                        <option>Insects</option>
                        <option>Mammals</option>
                        <option>Vivarium</option>
                    </select>
                    <button
                        title='Search'
                        className={styles['button-breSearchHeaderPart-style']}
                        onClick={run_HeaderEvent}
                    >
                        <img
                            alt=""
                            src="Search_Button.svg"
                            className={styles['img-breSearchHeaderPart-style']}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
