import React from 'react';
import { ActivityIndicator, ViewProps } from 'react-native';

import { CenterView } from './styles';

interface NativeLoaderProps extends ViewProps {
  size?: string;
  color?: string;
}

const NativeLoader: React.FC<NativeLoaderProps> = ({
  size = 'small',
  color,
}) => (
  <CenterView>
    <ActivityIndicator size={size} color={color || '#fff'} />
  </CenterView>
);
export default NativeLoader;
