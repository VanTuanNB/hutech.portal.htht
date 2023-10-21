import classNames from 'classnames/bind';
import { ReactElement, useEffect, useState } from 'react';
import styles from './Header.module.css';
import { IHeaderProps } from './interfaces/header.interface';

const cx = classNames.bind(styles);

export default function HeaderComponent(props: IHeaderProps): ReactElement {
    const [widthSidebar, setWidthSidebar] = useState<string>(() =>
        window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width'),
    );
    const handleResizeSidebar = (e: any) => {
        setWidthSidebar(widthSidebar === '14vw' ? '20vw' : '14vw');
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--sidebar-width', widthSidebar);
    }, [widthSidebar]);

    return (
        <header className={cx('header')}>
            <div className={cx('header-left')}>
                <button onClick={handleResizeSidebar} style={{ cursor: 'pointer' }}>
                    Toggle sidebar
                </button>
            </div>
            <div className={cx('header-right')}></div>
        </header>
    );
}
// queue stack
