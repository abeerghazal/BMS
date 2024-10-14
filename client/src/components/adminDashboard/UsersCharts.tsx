import { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const RandomData = (min: number, max: number) => {
  const data: number[] = [];
  for (let i = 0; i < 10; i += 1) {
    data.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return data;
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'المستخدمون و عدد الشقق',
    },
  },
};

export interface UserBillsProps {
  usersBills: any[];
}

const UsersCharts: FC<UserBillsProps> = ({ usersBills }) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
  const labels = usersBills.map((x) => `${x['Flat.User.first_name']} ${x['Flat.User.last_name']}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const values = usersBills.map((x) => Number(x.n_bills));
  const data = {
    labels,
    datasets: [
      {
        label: 'المستخدمون',
        data: values,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default UsersCharts;
