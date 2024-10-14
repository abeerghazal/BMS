/* eslint-disable import/prefer-default-export */
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, MenuList, Footer } from '../../components';

const { Content } = Layout;

const DashboardLayout: React.FC = () => (
  <>
    <Navbar />
    <Layout
      style={{
        position: 'relative',
        top: '70px',
      }}
    >
      <MenuList />
      <Content id="container">
        <Outlet />
      </Content>
    </Layout>
    <Footer />
  </>
);

export default DashboardLayout;
