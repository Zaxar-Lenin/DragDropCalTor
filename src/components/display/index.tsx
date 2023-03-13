import React, { FC, useState } from 'react';
import styled from 'styled-components';

type Props = {
  input: string;
  answer: string;
};

const Input = styled.input`
  border: none;
  background-color: #f3f4f6;
  border-radius: 6px;
  width: 232px;
  height: 52px;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: end;
  text-align: right;

  &:focus {
    border: none !important;
    border-bottom: 1px solid lightgray !important;
  }
`;

const Display: FC<Props> = ({ input, answer }) => {
  const [disable, setDisable] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setDisable(true);
  };

  const handleMouseLeave = () => {
    setDisable(false);
  };

  return (
    <>
      <div>
        {answer === '' ? (
          <Input
            type="text"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            name="input"
            disabled={disable}
            value={input}
            placeholder="0"
            maxLength={12}
            autoComplete="off"
          />
        ) : (
          <Input
            type="text"
            name="value"
            disabled={disable}
            style = {answer === 'Неверное выражение' ? {
              fontSize: '14px'
            }: {}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            value={answer}
          />
        )}
      </div>
    </>
  );
};

export default Display;
