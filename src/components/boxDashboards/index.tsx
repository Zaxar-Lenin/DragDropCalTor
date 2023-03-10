import React from 'react';
import styled from 'styled-components';
import Constructor from 'components/constructor';
import FieldDragDrop from 'components/fieldDragDrop';

const WrapperBoxDashboards = styled.div`
  width: 100%;
  display: flex;
  align-self: end;
  align-items: center;
  justify-content: space-between;
`;

const BoxDashboards = () => {
  return (
    <WrapperBoxDashboards>
      <Constructor />
      <FieldDragDrop />
    </WrapperBoxDashboards>
  );
};

export default BoxDashboards;
