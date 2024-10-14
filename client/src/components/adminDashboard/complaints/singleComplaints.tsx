import {
  Typography, Form, Input, message,
} from 'antd';
import React, { useState, useEffect } from 'react';
import './style.css';
import { LeftOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

import { InferComplaintsModel } from '../../../Interfaces/complaints';
import { Loading } from '../../index';

const { Title } = Typography;

type RequiredMark = boolean | 'optional';

const SingleComplaints: React.FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
  const [loading, setLoading] = useState<boolean>(true);

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const { id } = useParams();

  const [complaints, setComplaints] = useState<InferComplaintsModel>({
    id: 0,
    title: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    UserId: 0,
    flat_number: 0,
  });
  const fetchData = (signal : AbortSignal) => {
    axios.get(`/api/v1/complaints/${Number(id)}`, { signal })
      .then(({ data: { data } }) => {
        setComplaints(data as InferComplaintsModel);
        form.setFieldsValue(data);
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
    <div>
      {
        (loading) ? <Loading /> : (
          <Form
            form={form}
            layout="vertical"
            initialValues={{ requiredMarkValue: requiredMark }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
            onFinish={fetchData}
          >
            <Form.Item name="title" label="عنوان الشكوى">
              <Input readOnly />
            </Form.Item>
            <Form.Item name="description" label="تفاصيل الشكوى">
              <Input readOnly />
            </Form.Item>

            <Link to="/admin/complaints">
              <p>
                الرجوع
                {' '}
                <LeftOutlined />
              </p>
            </Link>
          </Form>
        )
      }
    </div>
  );
};

export default SingleComplaints;
