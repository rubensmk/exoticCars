import React from 'react';
import { MdPlace, MdToday, MdSearch } from 'react-icons/md';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.Logo>
          <strong>EXOTIC</strong>
          <p>CARS</p>
        </S.Logo>
        <S.SearchBar>
          <div>
            <MdPlace />
            <p>North Carolina, NC 90025</p>
          </div>
          <div>
            <MdToday />
            <p>11/03/2021</p>
          </div>
          <div>
            <MdToday />
            <p>12/12/2021</p>
          </div>
          <S.SearchIcon>
            <MdSearch />
          </S.SearchIcon>
        </S.SearchBar>
        <S.Nav>
          <S.SignUpButton>Sign Up</S.SignUpButton>
          <S.SignInButton>Sign In</S.SignInButton>
        </S.Nav>
      </S.Container>
    </>
  );
};

export default Header;
