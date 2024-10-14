import { LeftCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Typography,
} from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Loading, NoData } from '../components';
import { IErrorSignupResult } from '../Interfaces/ISignupResult';
import { ISignupModel } from '../Interfaces/signup';
import createUser from '../services/createUser';

const { Title } = Typography;
const { Option } = Select;

const App: React.FC = () => {
  const [flatsNum, setFlatsNum] = useState<Numbers[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = (signal: AbortSignal) => {
    axios.get('/api/v1/flats/available', { signal })
      .then(({ data: { data } }) => {
        setFlatsNum(data as Array<Numbers>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ ما'));
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = (values: ISignupModel) => {
    createUser(values)
      .then((res) => {
        navigate('/admin/flats');
        return (message.success('تم إنشاء مستخدم جديد بنجاح'));
      })
      .catch((res: IErrorSignupResult) => {
        const msg: string = res.response.data.message === 'Phone Number Already Exist' ? 'رقم الهانف مستخدم حالبا' : 'حدث خطأ ما';
        return message.error(msg);
      });
  };

  return (
    <>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
          <Title style={{
            fontSize: 'x-large',
            padding: '16px',
            color: '#3380FF',
            fontWeight: 'bolder',
          }}
          >
            إضافة مستخدم
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
          <Link to="/admin/flats">
            {' '}
            <LeftCircleOutlined />
          </Link>

        </Button>
      </Row>

      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Row>
          <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }}>
            <Form.Item
              name="firstName"
              label="الاسم الأول"
              rules={[{ required: true, message: 'الرجاء ادخال اسمك الأول' }]}
              className="formItem"
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="lastName"
              label="اسم العائلة"
              rules={[
                {
                  required: true,
                  message: 'الرجاء ادخال اسم العائلة',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="phoneNumber"
              label="رقم الهاتف"
              rules={[{
                required: true,
                message: 'الرجاء ادخال رقم الهاتف',
              },
              {
                min: 7,
                message: 'رقم الهاتف يجب أن يكون أكبر من 7 ',
              },
              {
                max: 14,
                message: 'رقم الهاتف يجب أن يكون أقل من 14 ',
              }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 1 }}>
            <Form.Item
              className="formItem"
              name="email"
              label="البريد الإلكتروني"
              rules={[
                {
                  type: 'email',
                  message: 'البريد الإلكتروني يجب ان يكون موجود',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="password"
              label="كلمة المرور"
              rules={[
                {
                  required: true,
                  message: 'الرجاء ادخال رقم الهاتف',
                },
                {
                  min: 8,
                  message: ' كلمة المرور يجب أن تكون أكبر من 7 ',
                },
                {
                  max: 16,
                  message: 'كلمة المرور  يجب أن تكون أقل من 14 ',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="تأكيد كلمة المرور"
              label="تأكيد كلمة المرور"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'الرجاء تأكيد كلمة المرور',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('كلمات السر لم تتطابق'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 11 }}>
            <Form.Item
              name="flatNumber"
              label="رقم الشقة"
              rules={[{ required: true, message: 'اختر رقم الشقة' }]}
              className="formItem"
            >
              <Select style={{ width: 120 }}>
                {(loading) ? <Loading /> : ((!flatsNum) ? <NoData /> : flatsNum.map((num) => (
                  <Option key={num.id} value={num.flat_number}>{num.flat_number}</Option>
                )))}
              </Select>
            </Form.Item>

          </Col>
          <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 11 }}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#3380FF', marginTop: '26px', height: '40px', marginRight: '-10px', fontSize: '1.1rem',
                }}
              >
                <PlusCircleOutlined />
                إضافة مستخدم
              </Button>
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </>
  );
};

export default App;

interface Numbers {
  flat_number: number;
  id: number;
}
