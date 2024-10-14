import { message, Layout, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Title, Loading, NoData } from '../index';
import FlatCard from './FlatCard';

import './style.css';

type FreeFlatType = {
  id: number,
  area:number,
  notes: string
};
const FlatContainer: React.FC = () => {
  const [flats, setFlats] = useState<Array<FreeFlatType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = (signal : AbortSignal) => {
    axios.get('/api/v1/flats/', { signal })
      .then(({ data: { data } }) => {
        setFlats(data as Array<FreeFlatType>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);
  return (
    <Layout id="flats">
      <Title>الشقق المتاحة</Title>
      {
    (loading) ? <Loading /> : (flats.length !== 0) ? (
      <Row>
        {
          (flats.map((flatCard) => (<FlatCard key={flatCard.id} info={flatCard} />)))
        }
      </Row>
    ) : (<NoData />)
  }
    </Layout>
  );
};

export default FlatContainer;
