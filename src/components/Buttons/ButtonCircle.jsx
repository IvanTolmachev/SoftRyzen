import React from 'react';
import { Button, Circle } from './Button.styled';

const ButtonCircle = ({ onClick, label }) => {
  return (
    <Button onClick={onClick}>
      {label}
      <Circle></Circle>
    </Button>
  );
};

export default ButtonCircle;
