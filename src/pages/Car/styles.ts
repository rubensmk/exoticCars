import styled, { css, keyframes } from 'styled-components';
import ReactCarousel from '@brainhubeu/react-carousel';

interface CarouselImgProps {
  isChoosed: boolean;
}

const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
  height: 100vh;

  animation: ${FadeInAnimation} 1.2s;
`;

export const Title = styled.div`
  display: flex;
  padding-top: 2.3rem;
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
  animation: ${FadeInAnimation} 1.2s;
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

export const MainImg = styled.div`
  animation: ${FadeInAnimation} 1.2s;
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

export const CarouselButton = styled.button`
  width: 42px;
  height: 42px;
  border: 0;
  background: var(--black);
  border-radius: 50%;

  svg {
    color: var(--white);
  }
`;

export const CarouselImg = styled.img<CarouselImgProps>`
  width: 301px;
  height: 180px;
  border-radius: 8px;

  ${props =>
    props.isChoosed &&
    css`
      background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%)
        0% 0% no-repeat padding-box;
      width: 310px;
      height: 200px;
    `}
`;

export const Carousel = styled(ReactCarousel)`
  animation: ${FadeInAnimation} 1.2s;
  margin-top: 2.2rem;
  padding-left: 5.6rem;
  padding-right: 5.6rem;
`;
