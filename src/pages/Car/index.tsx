import { arrowsPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import { ICarDetails } from '../Dashboard/types';
import * as S from './styles';

interface IDataProps {
  location: {
    state: {
      id: number;
      image: string;
      model: string;
      maker: string;
      price: number;
      logo: string;
      details?: ICarDetails[];
    };
  };
}

const Car = ({ location }: IDataProps): JSX.Element => {
  const hystory = useHistory();
  const [currentCar, setCurrentCar] = useState(0);

  const handleNextCar = async () => {
    if (currentCar >= 2) {
      setCurrentCar(0);
    } else {
      setCurrentCar(prevState => prevState + 1);
    }
  };
  const handlePrevCar = async () => {
    if (currentCar === 0) {
      setCurrentCar(2);
    } else {
      setCurrentCar(prevState => prevState - 1);
    }
  };
  const handleChange = async () => {
    if (currentCar < 0 && currentCar > 2) {
      setCurrentCar(0);
    }
  };
  return (
    <>
      <Header />
      <S.Container>
        {!location.state.details && (
          <>
            <S.Title>
              <div>
                <h1>Details not found</h1>
              </div>
            </S.Title>
            <S.BookNow onClick={() => hystory.push('/')}>
              <FiArrowLeft />
              Go Back
            </S.BookNow>
          </>
        )}
        {location.state.details && (
          <>
            <S.Title>
              <img src={`${location.state.logo}`} alt={location.state.maker} />
              <div>
                <h1>
                  {location.state.maker} {location.state.model}
                </h1>
                <p>${location.state.price}/day</p>
              </div>
            </S.Title>
            <S.Content>
              <button type="button" onClick={() => hystory.push('/')}>
                <FiArrowLeft />
                Back to catalog
              </button>
              <S.MainImg>
                <img
                  src={location.state.details[currentCar].main_image}
                  alt={location.state.model}
                />
              </S.MainImg>

              <div>
                <h1>0{location.state.details[currentCar].id}</h1>
                <p>{location.state.details[currentCar].color.toUpperCase()}</p>
              </div>
            </S.Content>
            <S.BookNow>
              Book Now
              <FiArrowRight />
            </S.BookNow>
            <S.Carousel
              value={currentCar}
              onChange={handleChange}
              plugins={[
                'infinite',
                'centered',
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <S.CarouselButton type="button" onClick={handlePrevCar}>
                        <FiArrowLeft size="18" />
                      </S.CarouselButton>
                    ),
                    arrowRight: (
                      <S.CarouselButton type="button" onClick={handleNextCar}>
                        <FiArrowRight size="18" />
                      </S.CarouselButton>
                    ),
                    addArrowClickHandler: true,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ]}
            >
              {location.state.details &&
                location.state.details.map(item => (
                  <S.CarouselImg
                    src={item.icon_image}
                    alt={item.color}
                    key={item.id}
                    isChoosed={currentCar === item.id - 1}
                  />
                ))}
            </S.Carousel>
          </>
        )}
      </S.Container>
    </>
  );
};

export default Car;
