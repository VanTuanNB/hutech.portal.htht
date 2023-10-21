import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';

const cx = classNames.bind(styles);

export default function SidebarComponent() {
    return <div className={cx('sidebar')}></div>;
}
