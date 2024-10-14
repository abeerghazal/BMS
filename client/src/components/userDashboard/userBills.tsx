/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-tabs */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Typography, message, List, Select,
} from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InferBillUserModel } from '../../Interfaces/billUser';
import { Loading, NoData } from '../index';
import './style.css';

const { Title } = Typography;

const UserBills: React.FC = () => {
  const [userBill, setUserBill] = useState<Array<InferBillUserModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const handleChange = (value: string) => {
    if (value === 'جميع الشقق' || value === 'all') {
      axios.get('/api/v1/billUser/')
        .then(({ data: { data } }) => {
          setUserBill(data as Array<InferBillUserModel>);
          setLoading(false);
        }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
    } else if (value === 'true' || value === 'false') {
      axios.get(`/api/v1/billUser/?is_open=${value}`)
        .then(({ data: { data } }) => {
          setUserBill(data as Array<InferBillUserModel>);
          setLoading(false);
        }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
    } else {
      axios.get(`/api/v1/billUser/?flat_number=${value}`)
        .then(({ data: { data } }) => {
          setUserBill(data as Array<InferBillUserModel>);
          setLoading(false);
        }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
    }
  };

  const fetchData = (signal: AbortSignal) => {
    axios.get('/api/v1/billUser/', { signal })
      .then(({ data: { data } }) => {
        setUserBill(data as Array<InferBillUserModel>);
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
  const columns: ColumnsType<InferBillUserModel> = [
    {
      title: 'رقم الشقة',
      dataIndex: 'Flats.flat_number',
      key: 'Flats.flat_number',
      render: (text: number) => <h3 style={{ color: 'rgb(21 111 193)' }}>{text}</h3>,
    },
    {
      title: 'السعر',
      dataIndex: 'Flats.Bills.total_price',
      key: 'Flats.Bills.total_price',
      render: (text: number) => <div>{`${text} شيكل`}</div>,
    },
    {
      title: 'حالة الفاتورة ',
      dataIndex: 'Flats.Bills.is_open',
      key: 'Flats.Bills.is_open',
      render: (value: string) => (
        <div>
          {!value ? 'مدفوع' : 'غير مدفوع'}
        </div>
      ),
    },
    {
      title: 'تاريخ الفتورة',
      dataIndex: 'Flats.Bills.createdAt',
      key: 'Flats.Bills.createdAt',
      render: (value: string) => (
        <div>
          {new Date(value).toLocaleDateString()}
        </div>
      ),
    },
    {
      title: 'الخدمات بأسعارها',
      dataIndex: 'Flats.Bills.services',
      key: 'Flats.Bills.services',
      render: (value) => (
        <List.Item className="one" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {(value).map((ele: { price: number; name: string; }) => (
            <List>
              <p style={{ display: 'inline-block', height: '5px' }}>
                {`✦	${ele.name}:`}
              </p>
              {` ${ele.price}`}
            </List>
          ))}
        </List.Item>
      ),
    },
  ];

  const getIds = () : string[] => {
    const ids: string[] = ['جميع الشقق'];
    userBill.forEach((element) => {
      if (!ids.includes(element['Flats.flat_number'])) {
        ids.push(element['Flats.flat_number']);
      }
    });
    return ids;
  };

  return (

    (loading) ? <Loading /> : ((userBill.length > 0) ? (
      <div>
        <div className="topContainer">
          <Title>الفواتير</Title>
          <div>
            <Select
              defaultValue="جميع الشقق"
              onChange={handleChange}
              options={
              getIds().map((ele :any) => ({
                lable: ele,
                value: ele,
              }))
            }
            />
            <Select
              defaultValue="مدفوع / غير مدفوع"
              style={{ paddingRight: '8px' }}
              onChange={handleChange}
              options={[
                {
                  value: 'all',
                  label: 'مدفوع / غير مدفوع',
                },
                {
                  value: 'false',
                  label: 'مدفوع',
                },
                {
                  value: 'true',
                  label: 'غير مدفوع',
                },
              ]}
            />
          </div>
        </div>
        <Table
          pagination={{ defaultPageSize: 5 }}
          columns={columns}
          dataSource={userBill}
        />
      </div>

    ) : (
      <>
        <div className="topContainer">
          <Title>الفواتير</Title>
          <div>
            <Select
              defaultValue="جميع الشقق"
              style={{ width: 120 }}
              onChange={handleChange}
              options={
              getIds().map((ele :any) => ({
                lable: ele,
                value: ele,
              }))
            }
            />
            <Select
              defaultValue="مدفوع / غير مدفوع"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: 'all',
                  label: 'مدفوع / غير مدفوع',
                },
                {
                  value: 'false',
                  label: 'مدفوع',
                },
                {
                  value: 'true',
                  label: 'غير مدفوع',
                },
              ]}
            />
          </div>
        </div>
        <NoData />
      </>
    )
    )
  );
};
export default UserBills;
