import styles from './table-view.module.scss';
import classNames from 'classnames';
import { Header } from '../header/header';
import { TableDataView } from '../table-data-view/table-data-view';
import { useEffect, useState } from 'react';

export interface TableViewProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-table-views-and-templates
 */

export const TableView = ({ className, children = 'TableView' }: TableViewProps) => {
    const [data, setData] = useState([]);

    function clicked() {
        fetch('http://50.116.3.37:9001/api/all')
            .then((response) => response.json())
            .then((Data) => {
                setData(Data);
            });
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    function getData() {
        return data;
    }

    return (
        <div className={classNames(styles.root, className)}>
            <Header clicked={clicked}/>
            <TableDataView getData={getData} />
        </div>
    );
};