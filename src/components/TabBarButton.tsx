import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Text from '@components/Text';
import { theme } from '@constants';

const TabBarButton: React.FC<{
  route: any;
  renderIcon(props: any): React.ReactNode;
  label: string;
  isRouteActive: boolean;
  activeTintColor: string;
  inactiveTintColor: string;
  onTabPress(): void;
  onTabLongPress(): void;
}> = ({ route, renderIcon, label, isRouteActive, activeTintColor, inactiveTintColor, onTabPress, onTabLongPress }) => {
  const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onTabPress} onLongPress={onTabLongPress}>
      <View style={styles.container}>
        <View style={styles.content}>{renderIcon({ route, focused: isRouteActive, tintColor: tintColor })}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    paddingVertical: 8
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontFamily: 'Montserrat-SemiBold'
  }
});

export default TabBarButton;
