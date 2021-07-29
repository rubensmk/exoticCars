import React, { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard';

import Header from '../../components/Header';
import api from '../../services/api';
import * as S from './styles';
import { ICar } from './types';

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  const handleDetailsPage = (id: number) => {
    console.log(id);
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
          <CarCard data={car} onClick={handleDetailsPage} />
        ))}
      </S.Container>
      ;
    </>
  );
};

export default Dashboard;
