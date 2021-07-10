import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import NativeLoader from '../nativeLoader';

import { Container, Text } from './styles';

interface styleTextProps {
  fontSize?: number;
}

interface ButtonProps extends RectButtonProperties {
  loading?: boolean;
  children: string;
  onPress(): void;
  loadColor?: string;
  styleText?: styleTextProps;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  loadColor,
  ...rest
}) => (
  <Container
    onPress={onPress}
    style={{ opacity: loading ? 0.5 : 1 }}
    {...rest}
  >
    {loading ? (
      <NativeLoader color={loadColor || '#fff'} />
    ) : (
      <Text>{children}</Text>
    )}
  </Container>
);

export default Button;
