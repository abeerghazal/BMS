import {
  Typography,
} from 'antd';

import { Outlet } from 'react-router-dom';

const { Title } = Typography;

const Complaints: React.FC = () => (
  <>
    <div className="topContainer">
      <Title className="titleAdmin">الشكاوي</Title>
    </div>

    <Outlet />
  </>
);
export default Complaints;
