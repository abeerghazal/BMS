import { Image, Avatar } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import authContext from '../../context';

import './style.css';

const NavBar: React.FC = () => {
  const userInfo = useContext(authContext);
  return (
    <div className="header">
      <Link to="/">
        <Image preview={false} src={logoImg as string} alt="logo" className="logo" />
      </Link>
      <div className="top">
        <div className="notifications">
          <i className="ri-notification-3-line" />
          <div className="notification" />
        </div>
        <div className="info">
          <div className="profile-photo">
            <Avatar
              style={{
                background: '#2f80ed',
                color: '#fff',
                fontSize: '22px',
              }}
            >
              {userInfo?.user?.fullName.charAt(0)}
            </Avatar>
          </div>
          <p>
            مرحبًا
            <span>
              {userInfo?.user?.fullName}
            </span>

          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
