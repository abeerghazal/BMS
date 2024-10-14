/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext, useState } from 'react';
import {
  Button, Layout, Menu, message,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {
  GroupOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  LogoutOutlined,
  HomeOutlined,
  DollarCircleOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import axios from 'axios';
import authContext from '../../context';
import { UserContext } from '../../context/AuthContext';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: React.ReactNode,
  type?: 'group',

): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const listStyle = {
  color: 'black',
};
const MenuList: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, setUser } = useContext(authContext) as UserContext;
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.get('/api/v1/auth/logout');
      setUser(null);
      navigate('/');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return await message.success('تم تسجيل الخروج بنجاح');
    } catch {
      return message.error('حدث خطأ ما');
    }
  };
  const adminList: MenuItem[] = [
    getItem(<Link to="/admin" style={listStyle}>لوحة التحكم</Link>, '1', <GroupOutlined style={listStyle} />),
    getItem(<Link to="/admin/services" style={listStyle}>الخدمات</Link>, '2', <DesktopOutlined style={listStyle} />),
    getItem(<Link to="/admin/flats" style={listStyle}>الشقق</Link>, '3', <HomeOutlined style={listStyle} />),
    getItem(<Link to="/admin/bills" style={listStyle}>الفواتير</Link>, '4', <DollarCircleOutlined style={listStyle} />),
    getItem(<Link to="/admin/complaints" style={listStyle}>الشكاوي</Link>, '5', <CommentOutlined style={listStyle} />),
    getItem(<Link to="/admin/advs" style={listStyle}>الاعلانات</Link>, '6', <ContainerOutlined style={listStyle} />),
    getItem(<Link to="/admin/announcements" style={listStyle}>التعميمات</Link>, '7', <ContainerOutlined style={listStyle} />),
    getItem(<Link to="/admin/contacts" style={listStyle}>التواصل</Link>, '8', <MailOutlined style={listStyle} />),
    getItem(<Button onClick={Logout} style={{ border: 'none' }}>تسجيل الخروج </Button>, '9', <LogoutOutlined style={listStyle} />),
  ];

  const userList: MenuItem[] = [
    getItem(<Link to="/user" style={listStyle}>لوحة التحكم</Link>, '1', <GroupOutlined style={listStyle} />),
    getItem(<Link to="/user/bills" style={listStyle}>الفواتير</Link>, '4', <DollarCircleOutlined style={listStyle} />),
    getItem(<Link to="/user/addComplaint" style={listStyle}>اضافة شكوى</Link>, '5', <CommentOutlined style={listStyle} />),
    getItem(<Link to="/user/announcements" style={listStyle}>الإعلانات</Link>, '6', <ContainerOutlined style={listStyle} />),
    getItem(<Button onClick={Logout} style={{ border: 'none' }}>تسجيل الخروج </Button>, '9', <LogoutOutlined style={listStyle} />),
  ];

  return (
    <Sider
      collapsible
      theme="light"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      reverseArrow
    >
      <Menu
        mode="inline"
        items={user?.role === 'admin' ? adminList : userList}
        defaultSelectedKeys={['1']}
      />
    </Sider>
  );
};

export default MenuList;
