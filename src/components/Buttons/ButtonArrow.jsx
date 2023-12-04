import React from 'react';
import { ButtonArrow, CircleArrow } from './Button.styled';

const ButtonMore = ({ onClick, label }) => {
  return (
    <ButtonArrow onClick={onClick}>
      {label}
      <CircleArrow></CircleArrow>
    </ButtonArrow>
  );
};

export default ButtonMore;
