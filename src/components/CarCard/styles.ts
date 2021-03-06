import styled from 'styled-components';

export const Container = styled.div`
  background: var(--light-gray);
  width: 18rem;
  height: 14rem;
  border-radius: 1.25rem;

  &:hover {
    background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0%
      0% no-repeat padding-box;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.4rem 1rem 0 1rem;
  div {
    strong {
      font-size: 1.1rem;
      color: var(--black);
    }
    p {
      font-size: 1.1rem;
      color: var(--black);
      font-weight: 300;
    }
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: #c8c8ca;
  }
`;

export const CarImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  img {
    width: 15.45rem;
  }
`;

export const Price = styled.div`
  margin-right: 1rem;
  margin-top: 0.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  h1 {
    font-size: 1.5rem;
  }

  p {
    display: flex;
    font-size: 0.875rem;
    font-weight: 300;
    margin-left: 0.2rem;
  }
`;
