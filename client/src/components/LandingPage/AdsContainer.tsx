import { message, Layout, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdsCard from './AdsCard';
import { Title, Loading, NoData } from '../index';

import './style.css';

type AdsType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const AdsContainer: React.FC = () => {
  const [advertisements, setAdvertisements] = useState<Array<AdsType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = (signal: AbortSignal) => {
    axios.get('api/v1/advertisements/', { signal })
      .then(({ data: { data } }) => {
        setAdvertisements(data as Array<AdsType>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ ما'));
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);

  return (
    <Layout id="ads">
      <Title>الإعلانات </Title>
      {
    (loading) ? <Loading /> : (advertisements.length !== 0) ? (
      <Row>
        {(advertisements.map((advertisement) => (
          <AdsCard key={advertisement.id} info={advertisement} />)))}
      </Row>
    ) : (<NoData />)
  }
    </Layout>

  );
};

export default AdsContainer;
