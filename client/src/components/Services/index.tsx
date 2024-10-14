import {
  Timeline, Layout, Col, Row,
} from 'antd';
import DataStatic from '../../StaticData';
import { Title } from '../index';
import './style.css';

const { Content } = Layout;

const Services: React.FC = () => (
  <Layout style={{ backgroundColor: '#F6F8FA' }} id="services">
    <Title>خدماتنا</Title>
    <Content style={{
      padding: '16px 56px',
    }}
    >
      <Row id="services-section">
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
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="building"
            className="img-about"
          />
        </Col>
      </Row>
    </Content>

  </Layout>
);

export default Services;
