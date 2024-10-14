import { useEffect, useState } from 'react';
import {
  Card, Typography,
} from 'antd';
import axios from 'axios';
import BasicCards from './StatisticsCards';
import UsersCharts from './UsersCharts';

const { Title } = Typography;

const Statistics = () => {
  const [usersCount, setUsersCount] = useState<number>(0);
  const [messagesCount, setMessagesCount] = useState<number>(0);
  const [advertisementsCount, setAdvertisementsCount] = useState<number>(0);
  const [announcementsCount, setAnnouncementsCount] = useState<number>(0);
  const [complaintsCount, setComplaintsCount] = useState<number>(0);
  const [userBillsState, setUserBills] = useState<any[]>([]);
  useEffect(() => {
    axios.get('/api/v1/statistics/admin')
      .then(({ data }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
          users,
          advertisements,
          announcements,
          complaints,
          messages,
          usersBills,
        } = data;

        setUsersCount(users as number);
        setMessagesCount(messages as number);
        setAdvertisementsCount(advertisements as number);
        setAnnouncementsCount(announcements as number);
        setComplaintsCount(complaints as number);
        setUserBills(usersBills as any[]);
        console.log(usersBills);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <Title>لوحة التحكم</Title>

      <BasicCards
        advertisements={advertisementsCount}
        messages={messagesCount}
        announcements={announcementsCount}
        complaints={complaintsCount}
        users={usersCount}
      />
      <Card id="chartCard">
        <UsersCharts usersBills={userBillsState} />
      </Card>

    </>
  );
};
export default Statistics;
