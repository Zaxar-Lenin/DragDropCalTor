import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SvgIcon } from 'image/svg/Group 2.svg';

const WrapperFieldDragDrop = styled.div`
  min-width: 300px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 3px dashed grey;
`;

const Icon = styled(SvgIcon)`
  width: 30px;
  height: 30px;
`;

const MainText = styled.div`
  color: #5d5fef;
  margin: 10px 0 10px 0;
  font-weight: 500;
  line-height: 16.94px;
  size: 14px;
`;

const SubText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #6b7280;
  width: 100px;
`;

const FieldDragDrop = () => {
  return (
    <WrapperFieldDragDrop>
      <Icon />
      <MainText>Перетащите сюда</MainText>
      <SubText>любой элемент из левой панели</SubText>
    </WrapperFieldDragDrop>
  );
};

export default FieldDragDrop;
