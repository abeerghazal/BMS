/* eslint-disable import/no-cycle */
import {
  Button, Form, Input, Layout, message, Row, Col,
} from 'antd';
import { Title } from '../index';
import sendContactUs from '../../services/contactUsApi';
import './style.css';
import { InferContactUsModel } from '../../Interfaces/contactUs';
import ContactImg from '../../assets/images/login.jpg';

const { Item } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ContactUs: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: InferContactUsModel) => {
    sendContactUs(values)
      .then(() => {
        form.resetFields();
        return message.success('تم إرسال رسالتك بنجاح');
      })
      .catch(() => message.error('حدث خطأ ما، يرجى المحاولة لاحقًا'));
  };

  return (
    <Layout id="contact-us">
      <Title>تواصل معنا</Title>
      <Row>
        <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
          <img
            src={ContactImg as string}
            alt="building"
            className="img-contact"
          />
        </Col>

        <Col xs={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
          <Form name="nest-messages" form={form} onFinish={onFinish}>
            <Item name="name" label="الاسم" rules={[{ required: true }]}>
              <Input placeholder="الاسم" />
            </Item>

            <Item
              name="email"
              label="البريد الإلكتروني"
              rules={[{ required: true, type: 'email', message: 'يرجى إدخال بريد إلكتروني صحيح' }]}
            >
              <Input placeholder="البريد الإلكتروني" />
            </Item>

            <Item name="phone" label="رقم الجوال" rules={[{ required: true }]}>
              <Input
                type="tel"
                placeholder="رقم الجوال"
              />
            </Item>

            <Item name="subject" label="الموضوع" rules={[{ required: true }]}>
              <Input placeholder="موضوع الرسالة" />
            </Item>

            <Item name="description" label="الرسالة" rules={[{ required: true }]}>
              <Input.TextArea placeholder="أدخل رسالتك هنا" />
            </Item>

            <Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                أرسل طلبك
              </Button>
            </Item>
          </Form>
        </Col>
      </Row>

    </Layout>
  );
};

export default ContactUs;
