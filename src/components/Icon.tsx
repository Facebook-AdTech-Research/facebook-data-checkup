import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Feather,
  AntDesign,
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';

const Icon: React.FC<{
  name: string;
  family: string;
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}> = ({ name, family, size, color, style }) => {
  switch (family) {
    case 'FontAwesome':
      return <FontAwesome style={style} name={name} size={size} color={color} />;
    case 'FontAwesome5':
      return <FontAwesome5 style={style} name={name} size={size} color={color} />;
    case 'Feather':
      return <Feather style={style} name={name} size={size} color={color} />;
    case 'AntDesign':
      return <AntDesign style={style} name={name} size={size} color={color} />;
    case 'Octicons':
      return <Octicons style={style} name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons style={style} name={name} size={size} color={color} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons style={style} name={name} size={size} color={color} />;
    case 'Ionicons':
      return <Ionicons style={style} name={name} size={size} color={color} />;
    default:
      return <Feather style={style} name={name} size={size} color={color} />;
  }
};

export default Icon;
