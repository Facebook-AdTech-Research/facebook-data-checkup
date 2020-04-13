import React from 'react';
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { theme } from '@constants';
import { HeaderHeight } from '@services/utils';
import { NavigationTypes } from '@types';
import { Text } from '@components';

const NotificationContent: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  const insets = useSafeArea();

  const [scrollOffset, setScrollOffset] = React.useState<number>(0);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
    );
  };

  return (
    <View style={styles.flex}>
      <ScrollView
        onScroll={event => setScrollOffset(event.nativeEvent.contentOffset.y)}
        scrollEventThrottle={80}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top
          }
        ]}
      >
        {renderHeader()}
      </ScrollView>

      <View
        style={[
          styles.headerOverlay,
          {
            height: insets.top,
            shadowOpacity: scrollOffset > 0 ? (scrollOffset > 30 ? 1.0 : scrollOffset / 30) : 0
          }
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  content: {
    flexGrow: 1
  },
  header: {
    width: '100%',
    height: HeaderHeight,
    paddingTop: 6,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.COLORS.WHITE,
    shadowRadius: 8,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: -8 }
  }
});

export default NotificationContent;
