import React, { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as eyeIcon } from 'image/svg/eye.svg';
import { ReactComponent as dubleArrow } from 'image/svg/dubleArrow.svg';

const WrapperToggle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background-color: #f3f4f6;
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
  padding: 2px;
`;

const Button = styled.div`
  display: flex;
  min-height: 90%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 151px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: #fff;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.25);
  padding: 8px 12px;
  border-radius: 3px;
  position: absolute;
  transition: all 0.2s ease;
  top: 2px;
  left: 151px;
`;

const ConstructorButton = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  position: relative;
  z-index: 44;
`;

const IconArrow = styled(dubleArrow)`
  margin: 0 10px 0 0;
`;

const IconEye = styled(eyeIcon)`
  margin: 0 10px 0 0;
`;

type Props = {
  toggle: boolean;
  handleToggleChange: () => void;
};

const Toggle: FC<Props> = ({ toggle, handleToggleChange }) => {
  return (
    <WrapperToggle onClick={handleToggleChange}>
      <ConstructorButton>
        <IconEye />
        Runtime
      </ConstructorButton>
      <ConstructorButton>
        <IconArrow />
        Constructor
      </ConstructorButton>
      <Button
        style={
          !toggle
            ? {
                left: '2px',
              }
            : {}
        }
      ></Button>
    </WrapperToggle>
  );
};

export default Toggle;
