import { Col, Row } from 'antd';
import React from 'react';
import logoImg from '../../assets/images/logo.png';
import './style.css';

const Footer: React.FC = () => (
  <div id="footer">
    <Row>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 6, offset: 1 }} lg={{ span: 4, offset: 2 }}>
        <div>
          <div className="logo">
            <img src={logoImg as string} alt="logo" />
          </div>
          <p className="para-footer">
            سلسلة من المباني تأسست عام 2009 وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة
          </p>
          <div className="social-media">
            <span className="icon"><i className="ri-instagram-line" /></span>
            <span className="icon"><i className="ri-facebook-circle-line" /></span>
            <span className="icon"><i className="ri-twitter-line" /></span>
            <span className="icon"><i className="ri-whatsapp-line" /></span>
          </div>
        </div>
      </Col>

      <Col xs={{ span: 24, offset: 0 }} md={{ span: 6, offset: 1 }} lg={{ span: 4, offset: 2 }}>
        <h1 className="title">روابط سريعة</h1>
        <div className="links">
          <a className="anchorLink" href="/">
            وكالة
          </a>
          <a className="anchorLink" href="/">
            بناء
          </a>
          <a className="anchorLink" href="/">
            تأجير
          </a>

        </div>
      </Col>

      <Col xs={{ span: 24, offset: 0 }} md={{ span: 6, offset: 1 }} lg={{ span: 4, offset: 2 }}>
        <h1 className="title">مواقعنا</h1>
        <div className="links">
          <a className="anchorLink" href="/">
            غزة - تل الهوا
          </a>
          <a className="anchorLink" href="/">
            غزة - النصر
          </a>
          <a className="anchorLink" href="/">
            غزة - خانيونس
          </a>
        </div>
      </Col>

      <Col xs={{ span: 24, offset: 0 }} md={{ span: 6, offset: 1 }} lg={{ span: 4, offset: 2 }}>
        <h1 className="title">المساعدة</h1>
        <div className="links">
          <a className="anchorLink" href="/">
            +(790)000 000 000
          </a>
          <a className="anchorLink" href="/">
            +(790)000 000 000

          </a>
          <a className="anchorLink" href="/">
            bms@gmail.com
          </a>
        </div>
      </Col>
    </Row>
  </div>
);

export default Footer;
