import classNames from 'classnames/bind';
import { ReactElement } from 'react';
import HeaderComponent from '../components/Header/Header.component';
import SidebarComponent from '../components/Sidebar/Sidebar.component';
import styles from './Primary.module.css';
import { IPrimaryLayout } from './interfaces/primary.interface';

const cx = classNames.bind(styles);

export default function PrimaryLayout({ children }: IPrimaryLayout): ReactElement {
    return (
        <div className={cx('primaryLayout')}>
            <div className={cx('wrapper-layout')}>
                <HeaderComponent></HeaderComponent>
                <div className="content">{children}</div>
                <footer></footer>
            </div>
            <SidebarComponent />
        </div>
    );
}
