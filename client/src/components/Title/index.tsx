import { FC, ReactNode } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

type Props = {
  children: string,
};

const TitleComp: FC<Props> = ({ children }: { children: ReactNode }) => (
  <Title
    style={{
      fontSize: 'x-large',
      padding: '16px',
      textAlign: 'center',
      color: '#475E6B',
      fontWeight: 'bolder',
    }}
  >
    {children}
  </Title>
);
export default TitleComp;
