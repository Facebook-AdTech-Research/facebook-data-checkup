import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { theme } from '@constants';
import Icon from '@components/Icon';

const BackButton: React.FC<{
  color?: string;
  disabled?: boolean;
  onPress?(): void;
}> = ({ color = theme.COLORS.PRIMARY, disabled = false, onPress = () => {} }) => {
  const computedOpacity = disabled ? 0.5 : 1;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} disabled={disabled} onPress={onPress}>
        <Icon
          style={{
            opacity: computedOpacity
          }}
          family="MaterialIcons"
          name="keyboard-arrow-left"
          size={36}
          color={color}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    width: 42,
    height: 42
  },
  button: {
    height: 42,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default BackButton;
