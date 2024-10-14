import { Typography, Button, message } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { InferServicesModel } from '../../../Interfaces/services';
import { Loading, NoData } from '../../index';

const { Title } = Typography;

const ServicesContainer: React.FC = () => {
  const [service, setService] = useState<Array<InferServicesModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const columns: ColumnsType<InferServicesModel> = [
    {
      title: 'اسم الخدمة',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <h3 style={{ color: 'rgb(21 111 193)' }}>{text}</h3>,
    },
    {
      title: 'السعر ثابت/متغير',
      dataIndex: 'isFixed',
      key: 'isFixed',
      render: (text) => <p>{text ? 'ثابت' : 'متغير'}</p>,
    },
    {
      title: 'وصف الخدمة',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'السعر',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'تعديل',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => (
        <Link to={`/admin/services/editService/${record.id}`}>
          <EditOutlined />
        </Link>
      ),
    },
    {
      title: 'تفعيل / الغاء التفعيل',
      dataIndex: 'isOpen',
      key: 'isOpen',
      render: (text, record) => (
        <Button
          onClick={() => {
            // console.log('record: ', record);
            axios.put(`/api/v1/services/${record.id}`, {
              id: record.id, name: record.name, isOpen: !record.isOpen, isFixed: record.isFixed, description: record.description, price: record.price,
            }).then(() => {
              if (service.length) {
                setService((prev) => prev.map((ele) => {
                  if (ele.id === record.id) return { ...record, isOpen: !record.isOpen };
                  return ele;
                }));
              }
            }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
          }}
          type="primary"
        >
          {text ? 'الغاء التفعيل' : 'تفعيل'}
        </Button>
      ),
    },
  ];
  // const [isTrue, setIsTrue] = useState<boolean>(true);
  const fetchData = (signal : AbortSignal) => {
    axios.get('/api/v1/services/', { signal })

      .then(({ data: { data } }) => {
        // console.log('data: ', data);
        setService(data as Array<InferServicesModel>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="topContainer">
        <Title>الخدمات</Title>
        <Link to="/admin/services/addService">
          <Button type="primary" style={{ fontSize: '18px', height: '40px' }}>
            <PlusCircleOutlined />
            اضافة خدمة
          </Button>
        </Link>
      </div>
      {
        (loading) ? <Loading /> : ((service.length > 0) ? (
          <Table
            pagination={{ defaultPageSize: 5 }}
            columns={columns}
            dataSource={service}
          />
        ) : <NoData />)
      }
    </>
  );
};
export default ServicesContainer;
