import {
  Button, notification, Switch, Table, Typography,
} from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';

import axios from 'axios';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { IBill } from '../../Interfaces/Bills';
import { getBills, sendBillSMS } from '../../services/billsService';

const { Title } = Typography;

type NotificationType = 'success' | 'error';

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

const App: React.FC = () => {
  const [data, setData] = useState<IBill[]>();
  const [loading, setLoading] = useState(false);

  const openNotificationWithIcon = (type: NotificationType, message: string, description: string) => {
    notification[type]({
      message,
      description,
    });
  };

  const sendIBill = (id: number) => {
    sendBillSMS(id).then(() => {
      openNotificationWithIcon('success', 'تم', 'تم إرسال الرسالة بنجاح');
    })
      .catch(() => {
        openNotificationWithIcon('error', 'خطأ', 'حدث خطأ ما');
      });
  };
  const handlerPayBill = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    axios.get(`/api/v1/bills/paybill/${id}`)
      .then(() => {
        const oldData = data?.map((x: IBill) => {
          if (x.id === id) {
            return { ...x, is_open: !x.is_open };
          }
          return x;
        });
        setData(oldData);
      })
      .catch(console.error);
    event.preventDefault();
  };
  const columns: ColumnsType<IBill> = [
    {
      title: 'رقم الشقة',
      dataIndex: 'flat_number',
      sorter: true,
    },
    {
      title: 'اسم المستخدم',
      dataIndex: 'user_name',
    },
    {
      title: 'الكهرباء',
      dataIndex: 'electricity',
      sorter: true,
    },
    {
      title: 'مياه صحية',
      dataIndex: 'naturalWater',
      sorter: true,
    },
    {
      title: 'مياه مفلترة',
      dataIndex: 'drinkingWater',
      sorter: true,
    },
    {
      title: 'خدمات عامة',
      dataIndex: 'generalServices',
      sorter: true,
    },
    {
      title: 'الاجمالي',
      dataIndex: 'total_price',
      sorter: true,
    },
    {
      title: 'الحالة',
      dataIndex: 'is_open',
      filters: [
        { text: 'مدفوعة', value: true },
        { text: 'غير مدفوعة', value: false },
      ],
      render: (_, { id, is_open }) => (
        <Switch onChange={(__, event) => handlerPayBill(event, id)} defaultChecked={is_open} />
      ),
    },
    {
      title: 'ارسال',
      render: (_, record) => (
        <Button type="primary" onClick={(() => sendIBill(record.id))}>
          إرسال الفاتورة
        </Button>
      ),
    },
  ];

  const getRandomuserParams = (params: TableParams) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  });

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const fetchData = () => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getBills(qs.stringify(getRandomuserParams(tableParams)))
      .then((res) => {
        const { result, total } = res.data;
        setData(result);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IBill> | SorterResult<IBill>[],
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <>
      <div className="headerOfServices">
        <Title className="titleAdmin">الفواتير</Title>
      </div>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </>
  );
};

export default App;
