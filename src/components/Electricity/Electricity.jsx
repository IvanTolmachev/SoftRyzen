import React, { useState, useEffect } from 'react';
import { Section } from 'settings/Section';
import {
  BoxLine,
  ElectricityDistance,
  ElectricityDistanceBox,
  ElectricityTitle,
  SpankWh,
} from './Electricity.styled';

const Counter = () => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('counter');
    return storedCount ? parseInt(storedCount, 10) : 1_134_147_814;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 1;

        localStorage.setItem('counter', newCount.toString());

        return newCount;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <Section>
      <ElectricityTitle>
        Electricity we produced <br />
        for all time
      </ElectricityTitle>
      <BoxLine></BoxLine>
      <ElectricityDistanceBox>
        <ElectricityDistance>{formatNumber(count)}</ElectricityDistance>
        <SpankWh>kWh</SpankWh>
      </ElectricityDistanceBox>
    </Section>
  );
};

export default Counter;
