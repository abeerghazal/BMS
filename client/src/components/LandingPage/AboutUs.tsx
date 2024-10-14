/* eslint-disable import/no-cycle */
import {
  Layout, Typography, Col, Row,
} from 'antd';
import React from 'react';
import { Title } from '../index';
import AboutImg from '../../assets/images/about.jpg';
import './style.css';

const { Paragraph } = Typography;

const AboutUs: React.FC = () => (
  <Layout id="about-us">
    <Title>تعرف علينا</Title>
    <Row>
      <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
        <Paragraph>
          سلسلة أبراج BMS , هو سلسلة من المباني تأسست عام 2025
          <br />
          وتوفر سلسلة BMS عقارات سكنية متنوعة في مناطق سكنية و تجارية راقية جدا
          <br />
          حيث نساعدكم في العثور على افضل الشقق والخدمات الراقية
          <br />
          يوجد لدينا شقق متوفرة بمساحات مختلفة واتجاهات مختلفة
          <br />
          يمكنك التواصل معنا على مدار 24 ساعة من خلال الهاتف او الايميل او التواصل في الموقع

        </Paragraph>
      </Col>

      <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
        <img
          src={AboutImg as string}
          alt="building"
          className="img-about"
        />
      </Col>
    </Row>
  </Layout>
);
export default AboutUs;
