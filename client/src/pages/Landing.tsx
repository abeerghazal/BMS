import React from 'react';
import { Layout } from 'antd';
import {
  HeaderSection,
  FooterSection,
} from '../Layout';
import {
  HomeSection, AboutUs, AdsContainer, FlatContainer, Services, VideoSection, ContactUs,
} from '../components';

const { Content, Footer } = Layout;

const LandingPage: React.FC = () => (
  <Layout className="mainLayout">
    <HeaderSection />
    <Content>
      <HomeSection />
      <AboutUs />
      <AdsContainer />
      <FlatContainer />
      <Services />
      <VideoSection />
      <ContactUs />
    </Content>

    <FooterSection />
  </Layout>
);
export default LandingPage;
