import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import { Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { IRequestGetAllStatistics, IResponseServer } from '../../../../services/interfaces/api.interface';
import StatisticalService from '../../../../services/statistical/statistical.service';
import { EModeStatisticalScreen } from '../../constants/common.constant';
import { IStatisticalProps } from '../../interfaces/common.interface';
import styles from './statisticals.module.css';

const cx = classNames.bind(styles);

const columns: ColumnsType<any> = [
    {
        title: 'Danh mục',
        dataIndex: 'category',
        key: 'category',
        // render: (text) => <a>{text}</a>,
    },
    {
        title: 'Số tiền',
        dataIndex: 'money',
        key: 'money',
    },
    {
        title: 'Ngày thanh toán',
        dataIndex: 'paydate',
        key: 'paydate',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag: any) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Sửa</a>
                <a>Xóa</a>
            </Space>
        ),
    },
];

const mockData: any[] = [
    {
        key: '1',
        category: 'Ăn uống',
        money: 320.000,
        paydate:'10/10/2023',
        description: 'Tiền mua rau, trái cây',
    },
    {
        key: '2',
        category: 'Mua sắm',
        money: 320.000,
        paydate:'10/10/2023',
        description: 'Đồng phục học',
    },
    {
        key: '3',
        category: 'Học phí',
        money: 40.000000,
        paydate:'10/10/2023',
        description: 'Tinder :))',
    },
];

const statisticalsInstance = new StatisticalService();

function StatisticalComponent({ mode }: IStatisticalProps) {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => { //queue
        console.log('effect call');
        switch (mode) {
            case EModeStatisticalScreen.PREV:
                handleGetData({ page: 1, size: 10, mode: EModeStatisticalScreen.PREV });
                break;
            case EModeStatisticalScreen.CURRENT:
                handleGetData({ page: 1, size: 10, mode: EModeStatisticalScreen.CURRENT });
                break;
            case EModeStatisticalScreen.NEXT:
                handleGetData({ page: 1, size: 10, mode: EModeStatisticalScreen.NEXT });
                break;
            default:
                break;
        }
    }, [mode]);

    const handleGetData = (payload: IRequestGetAllStatistics) => {
        statisticalsInstance.getStatistics(payload).subscribe({
            next: (response: IResponseServer<any>) => {
                response = {
                    isSuccess: true,
                    status: 200,
                    data: mockData,
                    message: 'GET_Statistics_SUCCESSFULLY',
                };
                if (response.isSuccess) {
                    setData(handleTransfersData(response.data));
                }
            },
            error: (error) => console.log('error', error),
        });
    };

    const handleTransfersData = (data: any): any => {
        return data.map((item: any) => item);
    };

    const log = () => {
        console.log('JSX called');
        return <></>
    }

    return (
        <div className={cx('wrapper-statiscal')}>
            { log() }
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default memo(StatisticalComponent);
