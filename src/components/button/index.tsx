import React, { FC } from 'react';
import styled from 'styled-components';

const WrapperButton = styled.button`
  aspect-ratio: 1/1;
  width: 72px;
  height: 48px;
  //margin: 3%;
  background: #ffffff;
  border: 1px solid #e2e3e5;
  padding: 0.5rem;
  font-weight: 600;
  border-radius: 6px;
  font-size: 0.9rem;

  &:hover {
    cursor: pointer;
    border: 2px solid #5d5fef;
  }

  &:active {
    cursor: pointer;
    background-color: #5d5fef;
  }
`;
type ButtonProps = {
  value: string;
  color?: string;
  zero?: boolean;
  handleClick: () => void;
};

const Button: FC<ButtonProps> = ({ value, color, zero, handleClick }) => {
  return (
    <WrapperButton
      onClick={handleClick}
      style={
        zero
          ? {
              width: '100%',
              gridColumnStart: '1',
              gridColumnEnd: '3',
              gridRowStart: '4',
              gridRowEnd: '5',
              // margin: "-5px 0 0 0"
            }
          : {}
      }
    >
      {value}
    </WrapperButton>
  );
};

export default Button;
