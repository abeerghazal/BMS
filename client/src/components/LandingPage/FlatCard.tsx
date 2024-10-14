import { ShopOutlined, AppstoreAddOutlined, DollarCircleOutlined } from '@ant-design/icons';
import {
  Card, Image, Col, Space,
} from 'antd';
import React from 'react';

type FreeFlatType = {
  id: number,
  area:number,
  notes: string,
};

type FlatCardProps = { info:FreeFlatType };
const { Meta } = Card;
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const FlatCard: React.FC<FlatCardProps> = ({ info }) => (
  <Col
    xs={{ span: 32, offset: 0 }}
    md={{ span: 16, offset: 0 }}
    lg={{ span: 8, offset: 0 }}
  >
    <Card
      hoverable
      cover={<Image alt="free_flat" src="https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
      actions={[
        <IconText icon={AppstoreAddOutlined} text="5 غرف" key="list-vertical-Appstore-o" />,
        <IconText icon={ShopOutlined} text="2 مطبخ" key="list-vertical-shope-o" />,
        <IconText icon={DollarCircleOutlined} text="5000" key="list-vertical-dollar" />,
      ]}
    >
      <Meta
        title={`${info.area}م`}
        description={info.notes}
      />

    </Card>
  </Col>
);

export default FlatCard;
