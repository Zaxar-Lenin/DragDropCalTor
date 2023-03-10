import React from 'react';
import styled from 'styled-components';
import SwitchMode from 'components/switchMode/idex';
import BoxDashboards from 'components/boxDashboards';

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const App = () => {
  return (
    <Wrapper>
      <SwitchMode />
      <BoxDashboards />
    </Wrapper>
  );
};

export default App;
