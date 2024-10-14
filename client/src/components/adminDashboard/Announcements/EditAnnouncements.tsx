import {
  Form, Input, Button, message, Card,
} from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

type RequiredMark = boolean | 'optional';
interface IEditAnnouncementResponse {
  data: IEditAnnouncement
}
interface IEditAnnouncement {
  id: number;
  title: string;
  start_date: Date;
  end_date: Date;
}

const AnnouncementsForm: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [announcement, setAnnouncement] = useState<IEditAnnouncement>({
    id: 0, title: '', start_date: new Date(), end_date: new Date(),
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
  const { id } = useParams();
  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const GetOne = () => {
    axios.get<IEditAnnouncementResponse>(`/api/v1/announcements/${id as string}`)
      .then((x) => {
        const res = x.data.data;
        setAnnouncement(res);
        const data = {
          id: res.id,
          title: res.title,
          start_date: res.start_date,
          end_date: res.end_date,
        };

        form.setFieldsValue(data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    GetOne();
  }, []);

  const onFinish = (values: IEditAnnouncement) => {
    if (new Date(values.start_date) < new Date(new Date().toLocaleDateString())) {
      setErrorMessage('خطأ في تاريخ البدء');
    } else if (new Date(values.start_date) > new Date(values.end_date)) {
      setErrorMessage('خطأ في تاريخ الانتهاء');
    } else {
      axios.put(`/api/v1/announcements/${announcement.id}`, values)
        .then(() => {
          navigate('/admin/announcements');
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
        <Form.Item name="start_date" label="تاريخ البدء" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال تاريخ البدء ' }]}>
          <Input type="date" />
        </Form.Item>
        <Form.Item name="end_date" label="تاريخ الانتهاء" rules={[{ whitespace: false, required: true, message: 'الرجاء ادخال تاريخ الانتهاء ' }]}>
          <Input type="date" />
        </Form.Item>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <Form.Item>
          <Button htmlType="submit" type="primary">تعديل التعميم</Button>
          {' '}
          <Button htmlType="button" type="dashed" onClick={() => navigate('/admin/announcements')}>رجوع للرئيسية</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const App = () => (
  <Card title="إضافة تعميم" bordered={false}>
    <AnnouncementsForm />
  </Card>
);

export default App;
