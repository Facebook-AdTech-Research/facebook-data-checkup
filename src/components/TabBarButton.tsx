import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

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
    <TouchableOpacity style={styles.wrapper}>
      <View style={[styles.container, isRouteActive && styles.activeContainer]}>
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
    width: '90%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeContainer: {
    borderTopWidth: 2,
    borderTopColor: theme.COLORS.PRIMARY
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {}
});

export default TabBarButton;
