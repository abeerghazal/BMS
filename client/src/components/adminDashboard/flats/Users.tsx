import { UserOutlined } from '@ant-design/icons';
import {
  Avatar, Button, List, message, Radio, RadioChangeEvent, Skeleton,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from 'axios';

import React, { useEffect, useState } from 'react';

export interface IUserResult {
  id: number | null;
  full_name: string;
  phone_number: string;
  loading: boolean;

}
type PropsType = { value:number, setValue: (x: number) => void };
const Users: React.FC<PropsType> = ({ value, setValue }) => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data1, setData] = useState<IUserResult[]>([]);
  const [list, setList] = useState<IUserResult[]>([]);
  const [num, setNum] = useState<number>(2);

  const onChange = (e: RadioChangeEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setValue(e.target.value);
    e.preventDefault();
  };
  const fetchUsers = (signal: AbortSignal) => {
    axios.get('/api/v1/user/1', { signal })
      .then(({ data: { data } }) => {
        setInitLoading(false);
        const newList = data as Array<IUserResult>;
        setData(data as Array<IUserResult>);
        setList([{
          id: null,
          full_name: 'شقة فارغة',
          phone_number: 'لا يوجد',
          loading: false,
        }, ...newList] as Array<IUserResult>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ ما'));
  };
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchUsers(signal);
    return () => controller.abort();
  }, []);

  const onLoadMore = () => {
    setLoading(true);

    axios.get(`/api/v1/user/${num}`)
      .then(({ data: { data } }) => {
        setInitLoading(false);
        const newData = data1.concat(data as Array<IUserResult>);
        const newList = newData;

        setData(newData);
        setList([{
          id: null,
          full_name: 'شقة فارغة',
          phone_number: 'لا يوجد',
          loading: false,
        }, ...newList] as Array<IUserResult>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ ما'));

    setNum(num + 1);
  };

  const loadMore = !initLoading && !loading ? (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore}>تحميل المزيد</Button>
    </div>
  ) : null;

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={<Title level={5}>{item.full_name}</Title>}
              description={item.phone_number}
            />
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={item.id} />
            </Radio.Group>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default Users;
