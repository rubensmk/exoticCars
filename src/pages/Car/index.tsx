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
              <img src={location.state.logo} alt={location.state.maker} />
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
              <img
                src={location.state.details[0].main_image}
                alt={location.state.model}
              />
              <div>
                <h1>0{location.state.details[0].id}</h1>
                <p>{location.state.details[0].color.toUpperCase()}</p>
              </div>
            </S.Content>
            <S.BookNow>
              Book Now
              <FiArrowRight />
            </S.BookNow>
          </>
        )}
      </S.Container>
    </>
  );
};

export default Car;
