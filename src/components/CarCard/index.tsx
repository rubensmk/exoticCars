import { FiMoreHorizontal } from 'react-icons/fi';
import { ICarDetails } from '../../pages/Dashboard/types';
import * as S from './styles';

interface CarProps {
  data: {
    id: number;
    model: string;
    maker: string;
    price: number;
    image: string;
    details: ICarDetails[];
  };
  onClick: (id: number) => void;
}
const CarCard = ({ data, onClick }: CarProps): JSX.Element => {
  return (
    <>
      <S.Container onClick={() => onClick(data.id)}>
        <S.Title>
          <div>
            <strong>{data.maker}</strong>
            <p>{data.model.toUpperCase()}</p>
          </div>
          <FiMoreHorizontal />
        </S.Title>
        <S.CarImg>
          <img src={data.image} alt={data.model} />
        </S.CarImg>
        <S.Price>
          <h2>$</h2>
          <h1>{data.price} </h1>
          <p>/day</p>
        </S.Price>
      </S.Container>
    </>
  );
};

export default CarCard;
