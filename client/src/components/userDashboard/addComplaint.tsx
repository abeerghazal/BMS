import {
  Typography, Form, Input, Button, message, Modal,
} from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InferComplaintsModel } from '../../Interfaces/complaints';

import { Loading } from '../index';

const { Title } = Typography;

type RequiredMark = boolean | 'optional';

const AddComplaint: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
  const [loading, setLoading] = useState<boolean>(false);

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const success = () => {
    Modal.success({
      content: 'تم إرسال شكوتك بنجاح، سيتم مراجعتها بأقرب وقت',
    });
  };
  const onFinish = (values : InferComplaintsModel) => {
    setLoading(true);
    axios.post('/api/v1/complaints/', values)
      .then(() => {
        success();
        setLoading(false);
        form.resetFields();
        navigate('/user/addComplaint');
      })
      .catch(() => message.error('حدث خطأ , أعد المحاولة'));
  };

  return (
    <div>
      <Title className="titleAdmin">أضف شكوتك</Title>
      { (loading)
        ? <Loading />
        : (
          <Form
            form={form}
            layout="vertical"
            initialValues={{ requiredMarkValue: requiredMark }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
            onFinish={onFinish}
          >
            <Form.Item name="title" label="عنوان الشكوى" rules={[{ required: true, message: 'الرجاء ادخال عنوان الشكوى' }]}>
              <Input placeholder="أدخل عنوان الشكوى هنا" style={{ width: '50%' }} />
            </Form.Item>

            <Form.Item name="description" label="محتوى الشكوى" rules={[{ required: true, message: 'الرجاء ادخال محتوى الشكوى' }]}>
              <Input.TextArea placeholder="أدخل شكوتك هنا" style={{ width: '50%', height: '200px' }} />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">إضافة شكوى</Button>
            </Form.Item>
          </Form>
        )}
    </div>
  );
};

export default AddComplaint;
