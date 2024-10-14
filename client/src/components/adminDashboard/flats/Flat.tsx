import { LeftCircleOutlined } from '@ant-design/icons';
import {
  Button, Col, Divider, message, Modal, Row,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loading, NoData } from '../..';
import Users from './Users';

interface IUserFlatDetails {
  User: IUser | null;
}

const UserDetails : React.FC<IUserFlatDetails> = ({
  User,
}) => {
  if (User) {
    return (
      <>
        <Row>
          <Col lg={{ span: 10, offset: 2 }}>
            <p className="site-description-item-profile-p">{`الاسم الأول  : ${User.first_name}`}</p>
          </Col>
          <Col lg={{ span: 10, offset: 2 }}>
            <p className="site-description-item-profile-p">{` اسم العائلة : ${User.last_name}`}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 10, offset: 2 }}>
            <p className="site-description-item-profile-p">{` رقم الهاتف : ${User.phone_number}`}</p>
          </Col>
          <Col lg={{ span: 10, offset: 2 }}>
            <p className="site-description-item-profile-p">{` الإيميل  : ${User.email}`}</p>
          </Col>
        </Row>

      </>
    );
  }
  return <div>No User</div>;
};

const App: React.FC = () => {
  const [flatData, setFlatData] = useState< IFlatUserResult[]>([]);
  const [userData, setUserData] = useState< IUserResult[]>([]);
  const [value, setValue] = useState(1);

  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    axios.put(`/api/v1/flats/${Number(id)}`, { userId: value }).then(({ data: { data } }) => {
      setFlatData(data as Array<IFlatUserResult>);
      return message.success('تم تغير المالك بنجاح');
    }).catch(() => message.error('حدث خطأ , اعد المحاولة'));

    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const fetchData = (signal: AbortSignal) => {
    axios.get(`/api/v1/flats/${Number(id)}`, { signal })
      .then(({ data: { data } }) => {
        setFlatData(data as Array<IFlatUserResult>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ ما'));
  };

  const fetchUsers = (signal: AbortSignal) => {
    axios.get('/api/v1/user/1', { signal })
      .then(({ data: { data } }) => {
        setUserData(data as Array<IUserResult>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ ما'));
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    fetchUsers(signal);
    return () => controller.abort();
  }, []);
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
            معلومات عن الشقة

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
      {
(loading)
  ? (
    <Loading />
  )
  : (flatData[0]) ? (
    <div style={{ backgroundColor: 'white', margin: '0px 50px' }}>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
          <p className="site-description-item-profile-p" style={{ fontSize: 'large', padding: '16px' }}>الشقة :</p>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 10, offset: 2 }}>
          <p className="site-description-item-profile-p">{`رقم الشقة : ${flatData[0].flat_number}`}</p>
        </Col>
        <Col lg={{ span: 10, offset: 2 }}>
          <p className="site-description-item-profile-p">{` المساحة : ${flatData[0].area}`}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 10, offset: 2 }}>
          <p className="site-description-item-profile-p">{` ملاحظات : ${flatData[0].notes}`}</p>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
          <p className="site-description-item-profile-p" style={{ fontSize: 'large', padding: '16px' }}>صاحب الشقة :</p>
        </Col>
      </Row>
      {(flatData[0].User)
        ? <UserDetails User={flatData[0].User} />
        : (
          <Row>
            <Col lg={{ span: 10, offset: 2 }}>
              <p className="site-description-item-profile-p">لا يوجد مستخدم</p>
            </Col>
          </Row>
        )}
      <Divider />
      <Row>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
          <>
            <Button
              type="primary"
              onClick={showModal}
              style={{
                margin: '10px 390px', marginBottom: '62px', paddingBottom: '35px', fontSize: 'large',
              }}
            >
              تغير صاحب الشقة
            </Button>
            <Modal
              title=" تغير صاحب الشقة"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}

            >
              <Users value={value} setValue={setValue} />
            </Modal>
          </>
        </Col>

      </Row>
    </div>
  ) : (
    <NoData />
  )
}

    </>

  );
};
export default App;
export interface IUser {
  first_name: string;
  last_name: string;
  email:string;
  phone_number: string;
}
export interface IFlatUserResult {
  id: number;
  flat_number: number;
  area:number;
  notes:string;
  is_active:boolean;
  User: IUser | null;
}
export interface IUserResult {
  id: number;
  full_name: string;
  phone_number: string;

}
