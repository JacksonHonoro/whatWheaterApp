import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const AddressCurrentUser = styled.View`
  align-items: center;
  margin-bottom: 50px;
`;

export const AddressTitle = styled.Text`
  color: #eee;
  font-size: 22px;
  font-weight: bold;
`;

export const AddressDataName = styled.Text`
  color: #eee;
`;

export const WeatherCurrentUser = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.25px;
  border-color: #888;
  padding: 0 6px;
  margin-bottom: 10px;
`;

export const WeatherFieldName = styled.Text`
  color: #ddd;
`;

export const WeatherDataName = styled.Text`
   color: #ddd;
`;
