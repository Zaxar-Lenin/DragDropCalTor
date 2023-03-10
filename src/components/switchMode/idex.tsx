import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from 'components/toggle';

const WrapperSwitchMode = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: end;
`;

const Mode = styled.div`
  width: 305px;
  height: 40px;
`;

const SwitchMode = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <WrapperSwitchMode>
      <Mode>
        <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />
      </Mode>
    </WrapperSwitchMode>
  );
};

export default SwitchMode;
