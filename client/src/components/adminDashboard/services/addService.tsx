import {
  Typography, Form, Input, Switch, Button, message, Col, Row,
} from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { LeftCircleOutlined } from '@ant-design/icons';
import { InferAddServicesModel } from '../../../Interfaces/addService';

const { Title } = Typography;

type RequiredMark = boolean | 'optional';

const AddService: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onFinish = (values : InferAddServicesModel) => {
    axios.post('/api/v1/services', values)
      .then(() => navigate('/admin/services'))
      .catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };

  return (
    <div id="add-service">
      <Row>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
          <Title style={{
            fontSize: 'x-large',
            padding: '16px',
            color: '#3380FF',
            fontWeight: 'bolder',
          }}
          >
            إضافة خدمة
          </Title>

        </Col>

        <Button
          type="link"
          style={{
            fontSize: 'xx-large',
            padding: '16px',
            color: '#3380FF',
            fontWeight: 'bolder',
            paddingRight: '250px',
          }}
        >
          <Link to="/admin/services">
            {' '}
            <LeftCircleOutlined />
          </Link>

        </Button>
      </Row>
      <Form
        style={{ marginRight: '58px' }}
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
        onFinish={onFinish}
      >
        <Form.Item name="name" label="اسم الخدمة" rules={[{ required: true, message: 'الرجاء ادخال اسم الخدمة' }]}>
          <Input className="inputAddService" />
        </Form.Item>
        <Form.Item name="price" rules={[{ required: true, message: 'الرجاء ادخال سعر الخدمة' }]} label="سعر الخدمة">
          <Input type="number" className="inputAddService" />
        </Form.Item>
        <Form.Item name="description" label="الوصف" rules={[{ required: true, message: 'الرجاء ادخال وصف الخدمة' }]}>
          <Input className="inputAddService" />
        </Form.Item>
        <Form.Item initialValue name="isFixed" label="السعر ثابت/غيرثابت" required>
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item initialValue name="isOpen" label="تفعيل / الغاء التفعيل" required>
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">اضافة خدمة</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddService;
