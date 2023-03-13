import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import Display from 'components/display';
import { useTypedDispatch } from 'store/hooks/useTypedDispatch';
import { useTypedSelector } from 'store/hooks/useTypedSelector';
import { replacer } from 'utils/replacer';
import { setAnswer, setValue } from 'store/slice/calculator';

const WrapperConstructor = styled.div`
  min-width: 300px;
  min-height: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WrapperNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 4px;
`;

const WrapperSymbols = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 4px;

  button {
    width: 52px;
  }
`;

const WrapperEquals = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 4px;

  button {
    width: 230px;
    background-color: #5d5fef;
  }
`;

const WrapperInput = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 4px;
`;


// const Display = styled.div`
//   width: 90%;
//   color: white;
//   height: 20%;
//   margin-top: 1rem;
//   border-radius: 1rem;
//   justify-content: end;
// `;


type Item = {
  value: string;
  zero?: boolean;
};

const symbols: Item[] = [{ value: '/' }, { value: 'x' }, { value: '-' }, { value: '+' }];
const numbers: Item[] = [
  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '1' },
  { value: '2' },
  { value: '3' },
  {
    value: '0',
    zero: true,
  },
  { value: ',' },
];
const equals: Item = { value: '=' };

const Constructor = () => {
  const input = useTypedSelector(state => state.calculator.input);
  const answer = useTypedSelector(state => state.calculator.answer);
  const expression = useTypedSelector(state => state.calculator.expression);
  const dispatch = useTypedDispatch();

  const handleSetInput = (data: string) => {
    const result = replacer(data);
    dispatch(setValue(result));
  };

  const handleEqual = () => {
    try{
      const result = eval(expression);
      dispatch(setAnswer(result));
    }catch (e){
      dispatch(setAnswer('Неверное выражение'));
    }

  };

  return (
    <WrapperConstructor>
      <WrapperInput>
        <Display input={input} answer={answer} />
      </WrapperInput>
      <WrapperNumbers>
        {numbers.map(num => (
          <Button
            handleClick={() => handleSetInput(num.value)}
            key={`${num.value}+ 1000`}
            value={num.value}
            zero={num.zero}
          />
        ))}
      </WrapperNumbers>
      <WrapperSymbols>
        {symbols.map(num => (
          <Button
            handleClick={() => handleSetInput(num.value)}
            key={`${num.value}+ 1000`}
            value={num.value}
          />
        ))}
      </WrapperSymbols>
      <WrapperEquals>
        {<Button handleClick={handleEqual} value={equals.value} zero={equals.zero} />}
      </WrapperEquals>
    </WrapperConstructor>
  );
};

export default Constructor;
