import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  padding-top: 3.3rem;
  padding-left: 5.625rem;
  width: 100%;
  justify-content: flex-start;

  div {
    color: var(--black);
    margin-left: 2.5rem;

    h1 {
      font-size: 3.1rem;
    }
    p {
      font-size: 2.5rem;
      font-weight: 200;
    }
  }
`;

export const Content = styled.main`
  display: flex;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--black);
    border-radius: 1.5rem;
    height: 3.125rem;
    background: transparent;
    width: 11rem;

    font-size: 1rem;
    font-weight: 200;

    position: relative;
    top: 12.5rem;
    right: 10rem;

    svg {
      width: 1.5rem;
      height: 1rem;
      color: var(--dark-gray);
    }
  }
  div {
    color: var(--black);
    h1 {
      font-size: 3.1rem;
    }
    p {
      font-size: 1.875rem;
      font-weight: 200;
    }
  }
`;

export const BookNow = styled.button`
  border: 1px solid var(--black);
  border-radius: 1.5rem;
  height: 3.125rem;
  background: var(--black);
  width: 11rem;
  margin-top: 0.9rem;

  font-size: 1rem;
  font-weight: 200;
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.2s;

  svg {
    width: 1.5rem;
    height: 1rem;
    margin-left: 0.2rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;
