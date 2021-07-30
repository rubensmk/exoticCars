import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CarCard from '../../components/CarCard';

import Header from '../../components/Header';
import * as S from './styles';
import { ICar } from './types';

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const hystory = useHistory();

  const handleDetailsPage = (data: ICar) => {
    hystory.push({
      pathname: '/car',
      state: data,
    });
  };
  useEffect(() => {
    async function fetchCars() {
      const response = await axios.get('db.json');
      const allCars = response.data.cars;
      setCars(allCars);
    }
    fetchCars();
  }, []);
  return (
    <>
      <Header />
      <S.Container>
        {cars.map(car => (
          <CarCard
            data={car}
            onClick={() => handleDetailsPage(car)}
            key={car.id}
          />
        ))}
      </S.Container>
      ;
    </>
  );
};

export default Dashboard;
