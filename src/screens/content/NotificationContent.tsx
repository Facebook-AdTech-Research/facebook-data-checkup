import React from 'react';
import { StyleSheet, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { theme } from '@constants';
import { HeaderHeight } from '@services/utils';
import { NavigationTypes } from '@types';
import { Text, Icon } from '@components';

const NotificationContent: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  const insets = useSafeArea();

  const [scrollOffset, setScrollOffset] = React.useState<number>(0);

  const openCheckUp = () => {
    navigation.navigate('CheckUp');
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <View style={styles.searchButton}>
            <Icon family="FontAwesome" name="search" size={22} color={theme.COLORS.BLACK} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.content}>
        <Text style={styles.earlierText}>Earlier</Text>
      </View>
    );
  };

  return (
    <View style={styles.flex}>
      <ScrollView
        onScroll={event => setScrollOffset(event.nativeEvent.contentOffset.y)}
        scrollEventThrottle={80}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top
          }
        ]}
      >
        {renderHeader()}
        {renderContent()}
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
  scrollContent: {
    flexGrow: 1
  },
  header: {
    width: '100%',
    height: HeaderHeight,
    paddingTop: 6,
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.COLORS.FACEBOOK_GRAY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 3
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
  },
  content: {
    marginTop: 18,
    flex: 1
  },
  earlierText: {
    marginHorizontal: 18,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default NotificationContent;
