import MenuFoldOutlined from '@ant-design/icons/lib/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/lib/icons/MenuUnfoldOutlined';
import Button from 'antd/es/button/button';
import { Header } from 'antd/es/layout/layout';
import classNames from 'classnames/bind';
import { ReactElement, memo } from 'react';
import styles from './Header.module.css';
import { IHeaderProps } from './interfaces/header.interface';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { AutoComplete, Avatar, Space } from 'antd';
const cx = classNames.bind(styles);

function HeaderComponent({ collapsed, bgColor, onToggleCollapsed }: IHeaderProps): ReactElement {
    return (
        
        <Header className={cx('wrapper-header')} style={{ padding: 0, background: bgColor }}>
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
            <Space className={cx('wrapper-header__user')} direction="vertical" size={16}>
                <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
                </Space>
            </Space>
        </Header>
    );
}
export default memo(HeaderComponent);
// queue stack
