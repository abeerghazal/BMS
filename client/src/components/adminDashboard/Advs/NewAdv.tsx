import {
  Form, Input, Button, message, Card,
} from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

type RequiredMark = boolean | 'optional';
interface IAddAdv {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
}

const AdvertisementsForm: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
  const { type } = useParams();
  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onFinish = (values: IAddAdv) => {
    if (new Date(values.startDate) < new Date(new Date().toLocaleDateString())) {
      setErrorMessage('خطأ في تاريخ البدء');
    } else if (new Date(values.startDate) > new Date(values.endDate)) {
      setErrorMessage('خطأ في تاريخ الانتهاء');
    } else {
      axios.post('/api/v1/advertisements', values)
        .then(() => {
          navigate('/admin/advs');
        })
        .catch(() => message.error('حدث خطأ , اعد المحاولة'));
    }
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
        onFinish={onFinish}
      >
        <Form.Item name="title" label="الإعلان" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال اسم الاعلان' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="وصف الاعلان" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال وصف الاعلان' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="startDate" label="تاريخ البدء" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال تاريخ البدء ' }]}>
          <Input type="date" />
        </Form.Item>
        <Form.Item name="endDate" label="تاريخ الانتهاء" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال تاريخ الانتهاء ' }]}>
          <Input type="date" />
        </Form.Item>
        <Form.Item name="image" label="الصورة" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال رابط الصورة' }]}>
          <Input type="url" />
        </Form.Item>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <Form.Item>
          <Button htmlType="submit" type="primary">اضافة إعلان</Button>
          {' '}
          <Button htmlType="button" type="dashed" onClick={() => navigate('/admin/advs')}>رجوع للرئيسية</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const App = () => (
  <Card title="إضافة إعلان" bordered={false}>
    <AdvertisementsForm />
  </Card>
);

export default App;
