import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';

const cx = classNames.bind(styles);

export default function SidebarComponent() {
   return <div className={cx('sidebar')}>
    <div className={cx('sidebar-button')}>
        <button style={{fontSize: '24px'}}>Sổ giao dịch</button>
    </div>
    <div className={cx('sidebar-button')}>
        <button style={{fontSize: '24px'}}> Biểu đồ</button>
  </div>
</div>

}
