import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import {
  Button, message, Table, Typography,
} from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IFlatsUsersResult } from '../../../Interfaces/IFlatsUsersResult';
import getFlatsUsers from '../../../services/flatsUsers';

const { Title } = Typography;

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

const columns: ColumnsType<IFlatsUsersResult> = [
  {
    title: 'رقم الشقة',
    dataIndex: 'flat_number',
    sorter: true,
    width: '20%',

  },
  {
    title: 'اسم المستخدم',
    render: (_, record) => (
      <p>{record.full_name !== 'null null' ? record.full_name : 'شقة فارغة'}</p>
    ),
  },
  {
    title: 'رقم الجوال',
    dataIndex: 'phone_number',
  },
  {
    title: 'تعديل',
    dataIndex: 'id',
    key: 'id',
    render: (_, record) => (
      <Link to={`/admin/flats/${record.id}`}>
        <EditOutlined />
      </Link>
    ),
  },
];

const getRandomUserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const Flats: React.FC = () => {
  const [data, setData] = useState<Array<IFlatsUsersResult>>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5, // here to change the table size (total/limit)
    },
  });

  const fetchData = (signal: AbortSignal) => {
    setLoading(true);
    getFlatsUsers(qs.stringify(getRandomUserParams(tableParams)), signal)
      .then((res) => {
        const { total } = res.data;
        setData(res.data.result);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total,
          },
        });
      }).catch(() => message.error('حدث خطأ ما'));
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IFlatsUsersResult> | SorterResult<IFlatsUsersResult>[],
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <>
      <div className="topContainer">
        <Title>الشقق</Title>
        <Link to="/admin/adduser">
          <Button type="primary" style={{ fontSize: '18px', height: '40px' }}>
            <PlusCircleOutlined />
            اضافة مستخدم
          </Button>
        </Link>
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

export default Flats;
