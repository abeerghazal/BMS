import {
  Card, Col, Image,
} from 'antd';
import React from 'react';

const { Meta } = Card;
type AdsType = {
  id:number;
  image: string;
  title: string;
  description: string;
};
  type AdProps = { info:AdsType };
const AdsCard: React.FC<AdProps> = ({ info }) => (
  <Col
    xs={{ span: 32, offset: 0 }}
    md={{ span: 16, offset: 0 }}
    lg={{ span: 8, offset: 0 }}
  >
    <Card
      cover={(
        <Image
          alt="Advertisement"
          src={info.image}
        />
          )}
    >
      <Meta
        title={info.title}
        description={info.description}
      />
    </Card>
  </Col>
);
export default AdsCard;
