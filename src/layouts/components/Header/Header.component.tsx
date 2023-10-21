import classNames from 'classnames/bind';
import { ReactElement, useEffect, useState } from 'react';
import styles from './Header.module.css';
import { IHeaderProps } from './interfaces/header.interface';
import MenuFoldOutlined from '@ant-design/icons/lib/icons/MenuFoldOutlined';
import Avatar from 'antd/es/avatar/avatar';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
const cx = classNames.bind(styles);

export default function HeaderComponent(props: IHeaderProps): ReactElement {
    const [widthSidebar, setWidthSidebar] = useState<string>(() =>
        window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width'),
    );
    const handleResizeSidebar = (e: any) => {
        setWidthSidebar(widthSidebar === '16vw' ? '0vw' : '16vw');
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--sidebar-width', widthSidebar);
    }, [widthSidebar]);

    return (
        <header className={cx('header')}>
            <div className={cx('header-left')}>
            <button onClick={handleResizeSidebar} style={{ cursor: 'pointer', padding: '10px'}}> 
                <MenuFoldOutlined />
             </button>
            </div>
            <div className={cx('header-right')} style={{float: 'right'}}>
                <Avatar size="small" icon={<UserOutlined />} />
            </div>
        </header>
    );
}
// queue stack
