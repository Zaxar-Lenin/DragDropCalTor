import React from 'react';
import styled from 'styled-components';

const WrapperConstructor = styled.div`
  min-width: 300px;
  min-height: 500px;
  background-color: black;
  border-radius: 5px;
`;

const Constructor = () => {
  return <WrapperConstructor></WrapperConstructor>;
};

export default Constructor;
