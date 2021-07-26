import React from 'react';
import styled from 'styled-components';
import { MoonIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <Navbar>
      <Logo />
      <SearchInput placeholder="Buscar video" />
      <WrapperRight>
        <MoonIconStyled />
        <Avatar />
      </WrapperRight>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  width: 100%;
  background-color: #fff;
`;

const Logo = styled.div`
  width: 6rem;
  height: 2.5rem;
  border-radius: 2px;
  background-color: #e5e7eb;
`;

const SearchInput = styled.input`
  background-color: #fff;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 1rem;

  :focus {
    outline-color: #8b5cf6;
  }
`;

const WrapperRight = styled.div`
  display: flex;

  * {
    margin-left: 0.5rem;
  }
`;

const MoonIconStyled = styled(MoonIcon)`
  width: 2rem;
  cursor: pointer;
  color: #9ca3af;
`;

const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #e5e7eb;
`;
