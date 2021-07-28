import styled from 'styled-components';

export const Container = styled.header`
  background: var(--white);
  height: 5.2rem;
  padding: 1.625rem 6.8rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 10px 30px #0000001a;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 0.96px;

  strong {
    color: var(--black);
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 0.3rem;
  }
  p {
    color: var(--black);
    font-size: 1rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 33.75rem;
  height: 1.875rem;
  border-radius: 1.2rem;
  background: #f3f1fc;
  padding-left: 1.7rem;

  div {
    display: flex;
    flex-direction: row;
  }
  p {
    color: var(--dark-gray);
    font-size: 0.8rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }

  svg {
    color: #c4c4c4;
  }
`;

export const SearchIcon = styled.div`
  background: var(--white);
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 15px #00000014;

  svg {
    color: var(--purple);
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Nav = styled.nav``;

export const SignUpButton = styled.button`
  width: 5.25rem;
  height: 2.25rem;
  border-radius: 0.8rem;
  background: transparent;

  font-size: 1rem;
  font-weight: bold;
  color: var(--purple);
  border: 0;
`;

export const SignInButton = styled.button`
  width: 5.25rem;
  height: 2.25rem;
  border-radius: 0.8rem;
  background: transparent;

  font-size: 1rem;
  font-weight: bold;
  color: var(--purple);
  border: 2px solid var(--purple);
  margin-left: 1.75rem;
`;
