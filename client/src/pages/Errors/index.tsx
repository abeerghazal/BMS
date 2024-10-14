import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import image404 from '../../assets/images/404 Error-pana.svg';
import image500 from '../../assets/images/500 Internal Server Error-bro.svg';

type Props = {
  status: number,
};

const ErrorPage: React.FC<Props> = ({ status }) => (
  <div>
    <img src={status === 404 ? image404 as string : image500 as string} alt="Image404" style={{ height: '90vh', width: '100%' }} />
    <Link to="/">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type="primary"
          style={{
            fontSize: '18px', height: '40px', padding: '10px 60px', display: 'flex', alignItems: 'center',
          }}
        >
          HomePage
        </Button>
      </div>
    </Link>
  </div>
);
export default ErrorPage;
