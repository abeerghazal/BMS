import React, { useContext, useState } from 'react';

import {
  Anchor, Drawer, Button, Image, Layout,
} from 'antd';
import { Link as ReactLink } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import authContext from '../../context';
import { UserContext } from '../../context/AuthContext';
import './style.css';

const { Header } = Layout;

const { Link } = Anchor;

const HeaderSection: React.FC = () => {
  const { user } = useContext(authContext) as UserContext;
  console.log('user: ', user);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Header className="header">
      <a href="#home">
        <img src={logoImg as string} alt="logo" />
      </a>

      <div className="mobileHidden">
        <Anchor targetOffset={65}>
          <Link key="الرئيسية" href="#home" title="الرئيسية" />
          <Link key="تعرف علينا" href="#about-us" title="تعرف علينا" />
          <Link key="الاعلانات" href="#ads" title="الإعلانات" />
          <Link key="الشقق" href="#flats" title="الشقق" />
          <Link key="الخدمات" href="#services" title="الخدمات" />
          <Link key="تواصل معنا" href="#contact-us" title="تواصل معنا" />
          { (!user) ? (
            <ReactLink
              key="login"
              to="/auth/login"
              className="loginBtn"
            >
              تسجيل الدخول
            </ReactLink>
          ) : (
            <ReactLink
              key="dashboard"
              to={user.role}
              className="loginBtn"
            >
              لوحة التحكم
            </ReactLink>
          )}

        </Anchor>
      </div>

      <div className="mobileVisible">
        <Button type="primary" onClick={showDrawer}>
          <i className="fas fa-bars" />
        </Button>
        <Drawer
          title="BMS"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Anchor targetOffset={65}>
            <Link key="الرئيسية" href="#home" title="الرئيسية" />
            <Link key="تعرف علينا" href="#about-us" title="تعرف علينا" />
            <Link key="الاعلانات" href="#ads" title="الإعلانات" />
            <Link key="الشقق" href="#flats" title="الشقق" />
            <Link key="الخدمات" href="#services" title="الخدمات" />
            <Link key="تواصل معنا" href="#contact-us" title="تواصل معنا" />
            { (!user) ? (
              <ReactLink
                key="login"
                to="/auth/login"
                className="loginBtn"
              >
                تسجيل الدخول
              </ReactLink>
            ) : (
              <ReactLink
                key="dashboard"
                to={user.role}
                className="loginBtn"
              >
                لوحة التحكم
              </ReactLink>
            )}
          </Anchor>
        </Drawer>
      </div>
    </Header>
  );
};

export default HeaderSection;
