import { Space, Spin } from 'antd';

const Loading: React.FC = () => (
  <Space
    size="middle"
    style={{
      margin: '0px auto', display: 'flex', justifyContent: 'center', height: '100%',
    }}
  >
    <Spin size="large" />
  </Space>
);

export default Loading;
