import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@constants';

const Badge: React.FC<{
  active: boolean;
  fab?: boolean;
  children?: React.ReactNode;
}> = ({ active, fab = false, children }) => {
  if (!active) return <React.Fragment />;

  const renderBasic = () => <View style={styles.badge} />;

  const renderChildren = () => {
    return children ? children : renderBasic();
  };

  if (fab) {
    return <View style={styles.fabWrapper}>{renderChildren()}</View>;
  }

  return <View style={styles.wrapper}>{renderChildren()}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: -2,
    right: -2
  },
  fabWrapper: {
    position: 'absolute',
    top: 2,
    right: 2
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.COLORS.PRIMARY
  }
});

export default Badge;
