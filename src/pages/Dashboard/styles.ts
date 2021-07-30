import styled, { keyframes } from 'styled-components';

const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  height: 100%;
  padding: 0 6.875rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 5rem;
  margin-top: 2rem;
  animation: ${FadeInAnimation} 1.2s;
`;
