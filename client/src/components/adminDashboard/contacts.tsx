import { Typography, message } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { InferContactUsModel } from '../../Interfaces/contactUs';
import { Loading, NoData } from '../index';

const { Title } = Typography;

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Array<InferContactUsModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const columns: ColumnsType<InferContactUsModel> = [
    {
      title: 'اسم المستخدم',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <h3 style={{ color: 'rgb(21 111 193)' }}>{text}</h3>,
    },
    {
      title: 'البريد الالكتروني',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'رقم الجوال',
      dataIndex: 'phone',
      key: 'phone',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'عنوان الرسالة',
      dataIndex: 'subject',
      key: 'subject',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'نص الرسالة',
      dataIndex: 'description',
      key: 'description',
      render: (text) => <p>{text}</p>,
    },
  ];
  const fetchData = (signal : AbortSignal) => {
    axios.get('/api/v1/contacts/', { signal })

      .then(({ data: { data } }) => {
        setContacts(data as Array<InferContactUsModel>);
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
        <Title className="titleAdmin">التواصل</Title>
      </div>
      {
        (loading) ? <Loading /> : ((contacts.length > 0) ? (
          <Table
            pagination={{ defaultPageSize: 5 }}
            columns={columns}
            dataSource={contacts}
          />
        ) : <NoData />)
      }
    </>
  );
};
export default Contacts;
