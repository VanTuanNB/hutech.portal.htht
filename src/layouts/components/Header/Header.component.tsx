import MenuFoldOutlined from '@ant-design/icons/lib/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/lib/icons/MenuUnfoldOutlined';
import Button from 'antd/es/button/button';
import { Header } from 'antd/es/layout/layout';
import classNames from 'classnames/bind';
import { ReactElement, memo } from 'react';
import styles from './Header.module.css';
import { IHeaderProps } from './interfaces/header.interface';
const cx = classNames.bind(styles);

function HeaderComponent({ collapsed, bgColor, onToggleCollapsed }: IHeaderProps): ReactElement {
    return (
        <Header style={{ padding: 0, background: bgColor }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={onToggleCollapsed}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
            sjsdfjs
        </Header>
    );
}
export default memo(HeaderComponent);
// queue stack
