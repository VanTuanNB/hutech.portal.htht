import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';
import StatisticalComponent from './components/statistical/statistical.component';
import { EModeStatisticalScreen } from './constants/common.constant';
import { Button, Flex } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Prev month',
        children: <StatisticalComponent mode={EModeStatisticalScreen.PREV} />,
    },
    {
        key: '2',
        label: 'Current month',
        children: <StatisticalComponent mode={EModeStatisticalScreen.CURRENT} />,
    },
    {
        key: '3',
        label: 'Next month',
        children: <StatisticalComponent mode={EModeStatisticalScreen.NEXT} />,
    },
];

const HomeComponent: React.FC = () =>{
    return(
        <div>
            <Flex gap="small" wrap="wrap">
                <Button type="primary" style={{marginLeft:1200 }}>Thêm</Button>
            </Flex>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
} 

export default HomeComponent;
