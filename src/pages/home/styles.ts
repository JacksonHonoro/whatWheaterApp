/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import ButtonCustom from '../../shared/components/button';

export const Container = styled.ScrollView`
  background: #333;
  padding: 6px 12px;
`;

export const ButtonArea = styled.View`
  flex: 1;
  align-items: center;
`;

export const Button = styled(ButtonCustom)`
  width: 120px;
  height: 45px;
`;
