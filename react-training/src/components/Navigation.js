import React from 'react';
import styled from 'styled-components';
import userImg from '../assets/images/navigation/user.png';
import notification from '../assets/images/navigation/notification.png';
import settings from '../assets/images/navigation/settings.png';
import applications from '../assets/images/navigation/applications.png';
import collaboration from '../assets/images/navigation/collaboration.png';
import products from '../assets/images/navigation/products.png';
import exit from '../assets/images/navigation/exit.png';
import Header from './Header';
import '../assets/css/navigation.css';

const StyledDiv = styled.div`
  color: #fff;
`

const Navigation = () => {
  return (
    <StyledDiv>
      <div>
        <nav className="main-menu">
        <Header />
          <ul className="primary-actions">
            <li class="menu">
              <a href="/colender">
                <img className="profile-pic center" src={userImg} alt="Profile"/>
              </a>
              <p>Ajesh <i className="down-icon">▼</i></p>
            </li>
            <ul className="secondary-actions">
              <li>
                <a href="index.html">
                  <img src={notification} alt="notification" />
                </a>
              </li>
              <li>
                <a href="index.html">
                  <img src={settings} alt="settings "  />
                </a>
              </li>
            </ul>
            <li className="actions">
              <a href="/">
                <img className="center icon" src={applications} alt="Application"/>
              </a>
              <p>Applications</p>
            </li>
            <li className="actions">
              <a href="/colender">
                <img className="center icon" src={collaboration} alt="collaboration" />
              </a>
              <p>Co-lender</p>
            </li>
            <li className="actions">
              <a href="/contract">
                <img className="center icon" src={products} alt="products"/>
              </a>
              <p>Products</p>
            </li>
          </ul>
          <div class="login-details">
            <p className="login-text">Last Login</p>
            <p className="login-text">12/06/18 at 3pm</p>
            <p><img src={exit} alt="logout" /> <a href="/login" style={{textDecoration: "none", color: "#fff"}}>Logout</a></p>
          </div>
        </nav>
      </div>
    </StyledDiv>
  )
}

export default Navigation
