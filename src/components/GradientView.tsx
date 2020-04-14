import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradient, LinearGradienPoint } from 'expo-linear-gradient';

const GradientView: React.FC<{
  style?: StyleProp<ViewStyle>;
  colors: Array<string>;
  start?: LinearGradienPoint;
  end?: LinearGradienPoint;
}> = ({ style, colors, start = [0, 0], end = [1, 1], children }) => {
  return (
    <LinearGradient style={style} colors={colors} start={start} end={end}>
      {children}
    </LinearGradient>
  );
};

export default GradientView;
