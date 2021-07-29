import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CarCard from '../../components/CarCard';

import Header from '../../components/Header';
import api from '../../services/api';
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
      const response = await api.get('/cars');
      const allCars = response.data;
      setCars(allCars);
    }
    fetchCars();
  }, []);
  return (
    <>
      <Header />
      <S.Container>
        {cars.map(car => (
          <CarCard data={car} onClick={() => handleDetailsPage(car)} />
        ))}
      </S.Container>
      ;
    </>
  );
};

export default Dashboard;
