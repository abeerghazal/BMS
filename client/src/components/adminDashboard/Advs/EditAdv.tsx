import {
  Form, Input, Button, message, Card,
} from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

type RequiredMark = boolean | 'optional';
interface IEditAdvertisementResponse {
  data: IEditAdvertisement
}
interface IEditAdvertisement {
  id: number;
  title: string;
  start_date: Date;
  end_date: Date;
  image: string;
  description: string;
}

const AdvertisementsForm: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [Advertisement, setAdvertisement] = useState<IEditAdvertisement>({
    id: 0, title: '', image: '', description: '', start_date: new Date(), end_date: new Date(),
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
  const { id } = useParams();
  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const GetOne = () => {
    axios.get<IEditAdvertisementResponse>(`/api/v1/advertisements/${id as string}`)
      .then((x) => {
        const res = x.data.data;
        setAdvertisement(res);
        const data = {
          id: res.id,
          title: res.title,
          start_date: res.start_date,
          end_date: res.end_date,
          image: res.image,
          description: res.description,
        };

        form.setFieldsValue(data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    GetOne();
  }, []);

  const onFinish = (values: IEditAdvertisement) => {
    if (new Date(values.start_date) < new Date(new Date().toLocaleDateString())) {
      setErrorMessage('خطأ في تاريخ البدء');
    } else if (new Date(values.start_date) > new Date(values.end_date)) {
      setErrorMessage('خطأ في تاريخ الانتهاء');
    } else {
      axios.put(`/api/v1/advertisements/${Advertisement.id}`, values)
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
        <Form.Item name="title" label="التعميم" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال اسم الاعلان' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="وصف الاعلان" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال وصف الاعلان' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="start_date" label="تاريخ البدء" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال تاريخ البدء ' }]}>
          <Input type="date" />
        </Form.Item>
        <Form.Item name="end_date" label="تاريخ الانتهاء" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال تاريخ الانتهاء ' }]}>
          <Input type="date" />
        </Form.Item>
        <Form.Item name="image" label="الصورة" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال رابط الصورة' }]}>
          <Input type="url" />
        </Form.Item>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <Form.Item>
          <Button htmlType="submit" type="primary">تعديل التعميم</Button>
          {' '}
          <Button htmlType="button" type="dashed" onClick={() => navigate('/admin/advs')}>رجوع للرئيسية</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const App = () => (
  <Card title="إضافة تعميم" bordered={false}>
    <AdvertisementsForm />
  </Card>
);

export default App;
