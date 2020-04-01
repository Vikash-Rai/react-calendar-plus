import React from 'react';
import { BaseInputInterface } from 'core/interfaces/BaseInputInterface';
import { addLeftZero } from 'core/utils/calendar';
import styled from 'styled-components';

const BaseInput: React.FC<BaseInputInterface> = ({ date }) => {
  return (
    <Input
      type="text"
      value={`${addLeftZero(date.getDate())}/${addLeftZero(
        date.getMonth() + 1,
      )}/${date.getFullYear()}`}
      onChange={() => console.log('//TODO')}
    />
  );
};

export default BaseInput;

//TODO Add enhancement in width of input and calendar (auto)
const Input = styled('input')`
  box-sizing: border-box;
  width: 257px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px 10px;
  margin-bottom: 15px;
`;
