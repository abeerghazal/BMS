import {
  FireOutlined, MessageOutlined, ScheduleOutlined, SolutionOutlined, UserSwitchOutlined, PieChartOutlined,
  RadarChartOutlined, DotChartOutlined, LineChartOutlined, BarChartOutlined, AreaChartOutlined,
} from '@ant-design/icons';

import {
  Card, Col, Row, Statistic,
} from 'antd';
import { FC } from 'react';

interface BasicCardsProps {
  advertisements: number;
  announcements: number;
  complaints: number;
  users: number;
  messages: number;
}

const StatisticsCard: FC<BasicCardsProps> = (
  {
    advertisements,
    announcements,
    complaints,
    users,
    messages,
  },
) => (
  <div id="site-card-wrapper">
    <Row>
      <Col
        xs={{ span: 32, offset: 0 }}
        md={{ span: 16, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
      >
        <Card>
          <Statistic title="المستخدمون" value={users} prefix={<UserSwitchOutlined />} />
          <PieChartOutlined />
        </Card>
      </Col>

      <Col
        xs={{ span: 32, offset: 0 }}
        md={{ span: 16, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
      >
        <Card>
          <Statistic title="الشكاوي" value={complaints} prefix={<FireOutlined />} />
          <RadarChartOutlined />
        </Card>
      </Col>

      <Col
        xs={{ span: 32, offset: 0 }}
        md={{ span: 16, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
      >
        <Card>
          <Statistic title="الرسائل" value={messages} prefix={<MessageOutlined />} />
          <DotChartOutlined />
        </Card>
      </Col>

      <Col
        xs={{ span: 32, offset: 0 }}
        md={{ span: 16, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
      >
        <Card>
          <Statistic title="الرسائل" value={messages} prefix={<MessageOutlined />} />
          <LineChartOutlined />
        </Card>
      </Col>

      <Col
        xs={{ span: 32, offset: 0 }}
        md={{ span: 16, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
      >
        <Card>
          <Statistic title="الاعلانات" value={advertisements} prefix={<ScheduleOutlined />} />
          <BarChartOutlined />
          {' '}

        </Card>
      </Col>

      <Col
        xs={{ span: 32, offset: 0 }}
        md={{ span: 16, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
      >
        <Card>
          <Statistic title="التعميمات" value={announcements} prefix={<SolutionOutlined />} />
          <AreaChartOutlined />
        </Card>
      </Col>
    </Row>
  </div>
);

export default StatisticsCard;
