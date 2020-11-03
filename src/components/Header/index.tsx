import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { lighten } from 'polished';
import { MdExitToApp } from 'react-icons/md';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Tasks" width="400" height="160" />

      <div>
        <h4 style={{ margin: '30px' }}>
          <i>Bem vindo</i> Usuario
        </h4>
        <Link to="/main">Pagina principal</Link>
        <MdExitToApp size={30} />
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  @media (max-width: 629px) {
    padding: 10px 0px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  div {
    display: flex;
    align-items: center;
    a {
      font-weight: normal;
      color: #000;
      text-decoration: none;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
      & + a {
        margin-left: 30px;
      }
      @media (max-width: 675px) {
        font-size: 14px;
      }
    }
    h4 {
      margin-left: 30px;
      color: #000;
      font-size: 15px;
    }
    @media (max-width: 629px) {
      margin-left: 15px;
    }
    svg {
      margin-left: 20px;
      color: ${lighten(0.1, '#260068')};
      cursor: pointer;
      transition: color 0.2s;
      &:hover {
        color: #fff;
      }
    }
  }
`;

export default Header;
