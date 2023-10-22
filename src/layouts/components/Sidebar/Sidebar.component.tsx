import { ContainerOutlined, DesktopOutlined, PieChartOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { memo } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),

    // getItem('Navigation One', 'sub1', <MailOutlined />, [
    //   getItem('Option 5', '5'),
    //   getItem('Option 6', '6'),
    //   getItem('Option 7', '7'),
    //   getItem('Option 8', '8'),
    // ]),

    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),

    //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
];

function SidebarComponent({ collapsed }: { collapsed: boolean }) {
    return (
      <Sider trigger={null} collapsible collapsed={collapsed} >
      <div className="demo-logo-vertical" />
      <Menu
          style={{ paddingTop: 8 }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
              {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
              },
              {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
              },
              {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
              },
          ]}
      />
  </Sider>
    );
}

export default memo(SidebarComponent);
