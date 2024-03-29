import styles from './bre-search-card-part.module.scss';
import classNames from 'classnames';
import ipAddress from '../../ip_addresses.json';

export interface Bre_Search_Card_PartProps {
    className?: string;
    toggle_SearchCardPart: () => void;
    page_Clicked: () => void;
    object_CardData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-card-parts-and-templates
 */
export const Bre_Search_Card_Part = ({
    className,
    toggle_SearchCardPart,
    page_Clicked,
    object_CardData,
}: Bre_Search_Card_PartProps) => {
    function get_Data() {
        return (
            <div>
                <h1>{object_CardData.common_name}</h1>
                <ul>
                    <li>Catalog: {object_CardData.catalog}</li>
                    <li>Scientific Name: {object_CardData.scientific_name}</li>
                    <li>Prep Type: {object_CardData.prep_type}</li>
                    <li>Drawer: {object_CardData.drawer}</li>
                </ul>
            </div>
        );
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchCardPart-style']}>
                <div className={styles['div1-breSearchCardPart-style']}>
                    <div className={styles['img-container']}>
                        <img
                            className={styles['img-breSearchCardPart-style']}
                            src={object_CardData.image || 'no_image_image.svg'}
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                if (!object_CardData.image) return;
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'no_image_image.svg';
                            }}
                        />
                    </div>
                    {get_Data()}
                </div>
                <div className={styles['div2-breSearchCardPart-style']}>
                    <button
                        className={styles['button0-breSearchCardPart-style']}
                        onClick={toggle_SearchCardPart}
                    >
                        X
                    </button>
                    <button
                        className={styles['button1-breSearchCardPart-style']}
                        onClick={page_Clicked}
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};
