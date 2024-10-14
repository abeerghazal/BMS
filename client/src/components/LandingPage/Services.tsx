/* eslint-disable import/no-cycle */
import {
  Timeline, Layout, Col, Row,
} from 'antd';
import DataStatic from '../../StaticData';
import { Title } from '../index';
import ServicesImg from '../../assets/images/Services.jpg';

import './style.css';

const Services: React.FC = () => (
  <Layout id="services">
    <Title>خدماتنا</Title>
    <Row>
      <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
        <Timeline mode="right">
          {
              DataStatic.services.map((x: { id: number; content: string }) => (
                <Timeline.Item key={x.id}>{x.content}</Timeline.Item>))
            }
        </Timeline>
      </Col>

      <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
        <img
          src={ServicesImg as string}
          alt="building"
          className="img-Services"
        />
      </Col>
    </Row>

  </Layout>
);

export default Services;
