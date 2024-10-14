import {
  Col, Row,
  Button, Checkbox, Form, Input, Typography,
} from 'antd';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  LockOutlined, UserOutlined,
} from '@ant-design/icons';
import Login from '../../services/authService';
import { ILoginModel } from '../../Interfaces/loginModel';
import { IErrorLoginResult } from '../../Interfaces/ILoginResult';
import LogoImage from '../../assets/images/logo.png';
import LoginImage from '../../assets/images/login.jpg';
import authContext from '../../context';

const loginLogo = LoginImage as string;
const siteLogo = LogoImage as string;
const InputStyle = {
  padding: '10px',
  fontSize: '1.2rem',

};
const { Text, Title } = Typography;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const onFinish = (values: ILoginModel) => {
    setErrorMessage('');
    Login(values)
      .then((res) => {
        const { role } = res.data;
        const isAdmin: boolean = role === 'admin';
        if (isAdmin) { navigate('/admin'); } else navigate('/user');
      })
      .catch((res: IErrorLoginResult) => {
        const { status } = res.response;
        const message: string = status === 400 ? 'يوجد خطأ في المدخلات' : 'حدث خطأ ما';
        setErrorMessage(message);
      });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="phoneNumber"
        rules={[{ required: true, message: 'حقل رقم الهاتف مطلوب' }]}
      >
        <Input style={InputStyle} type="tel" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="رقم الهاتف" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'حقل كلمة المرور مطلوب' }]}
      >
        <Input
          style={InputStyle}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="كلمة المرور"
        />
      </Form.Item>
      <Text type="danger">{errorMessage}</Text>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>تذكرني</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          نسيت كلمة المرور
        </a>
      </Form.Item>
      <Form.Item>
        <Button
          style={{
            padding: '7px',
            fontSize: '1rem',
            borderRadius: '5px',
            width: '150px',
            height: '40px',
          }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          تسجيل الدخول
        </Button>
      </Form.Item>
    </Form>
  );
};

const colStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
};

const bgImageStyle = {
  backgroundImage: `url(${loginLogo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
const App: React.FC = () => {
  const user = useContext(authContext);
  return (
    <Row justify="space-between">
      <Col style={colStyle} xs={24} lg={12}>
        <div style={{ padding: '20px' }}>
          <Link to="/">
            <img style={{ marginBottom: '20%' }} src={siteLogo} alt="Logo" />
          </Link>
          <br />
          <Title>تسجيل الدخول</Title>
          <Title level={3}>تسجيل الدخول باستخدام رقم الهاتف وكلمة المرور الخاصة بك</Title>
          <br />
          <div>
            <LoginForm />
          </div>
        </div>
      </Col>
      <Col style={{ ...colStyle, ...bgImageStyle }} xs={24} lg={12} />
    </Row>
  );
};
export default App;
