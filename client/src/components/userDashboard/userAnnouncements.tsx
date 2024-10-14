import { List, message, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { InferAnnouncementsModel } from '../../Interfaces/announcements';
import { Loading, NoData } from '../index';

const { Title } = Typography;

const UserAnnouncements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Array<InferAnnouncementsModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = (signal : AbortSignal) => {
    axios.get('/api/v1/announcements/', { signal })
      .then(({ data: { data } }) => {
        setAnnouncements(data as Array<InferAnnouncementsModel>);
        setLoading(false);
      })
      .catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="topContainer">
        <Title>
          الإعلانات الداخلية
        </Title>
      </div>
      {
        (loading) ? <Loading /> : ((announcements.length > 0) ? (
          <List
            size="large"
            dataSource={announcements}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<p>{item.title}</p>}
                  description={`من يوم ${item.start_date} الى يوم ${item.end_date}`}
                />
              </List.Item>
            )}
          />
        ) : <NoData />)
      }
    </>
  );
};

export default UserAnnouncements;
