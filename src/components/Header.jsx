import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdGirl, MdHome } from 'react-icons/md';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 24px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
`;

const Links = styled.div`
  margin-left: auto; /* Push links to the right */
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
    margin-left: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: none;
  text-align: center;
  width: 200px;
  font-size: 16px;
`;

const GirlsIcon = styled(MdGirl)`
  font-size: 24px;
`;

const HomeIcon = styled(MdHome)`
  font-size: 24px;
`;

const Header = ({ onSearch, searchTerm }) => {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <HomeIcon />
        </Link>
      </Logo>
      <Title>ECHO KPOP</Title>
      <Links>
        <Link to="/girlbands">
          <GirlsIcon />
        </Link>
      </Links>
    </HeaderContainer>
  );
};

export default Header;
