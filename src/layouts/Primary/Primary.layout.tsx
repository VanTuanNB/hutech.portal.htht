import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import classNames from 'classnames/bind';
import { ReactElement, useState } from 'react';
import HeaderComponent from '../components/Header/Header.component';
import SidebarComponent from '../components/Sidebar/Sidebar.component';
import styles from './Primary.module.css';
import { IPrimaryLayout } from './interfaces/primary.interface';

const cx = classNames.bind(styles);

export default function PrimaryLayout({ children }: IPrimaryLayout): ReactElement {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <SidebarComponent collapsed={collapsed}></SidebarComponent>
            <Layout>
                <HeaderComponent collapsed={collapsed} bgColor={colorBgContainer} onToggleCollapsed={toggleCollapsed}></HeaderComponent>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height: '100vh',
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
