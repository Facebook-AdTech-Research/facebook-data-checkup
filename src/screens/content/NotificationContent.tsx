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

  const renderNotification = (name: string, time: string, unread: boolean) => {
    return (
      <TouchableOpacity onPress={openCheckUp}>
        <View
          style={[
            styles.notification,
            unread && {
              backgroundColor: theme.COLORS.FACEBOOK_LIGHT_BLUE
            }
          ]}
        >
          <View style={styles.notificationImageArea}>
            <View style={styles.notificationImage}></View>
            <View style={styles.notificationType}>
              <Icon family="FontAwesome5" name="user" size={16} color={theme.COLORS.WHITE} solid={true} />
            </View>
          </View>

          <View style={styles.notificationTextArea}>
            <Text style={styles.notificationContent}>
              <Text style={styles.boldText}>{name}</Text> accepted your friend request.
            </Text>
            <Text style={styles.notificationTime}>{time}</Text>
          </View>

          <TouchableOpacity>
            <Icon family="Entypo" name="dots-three-horizontal" size={24} color={theme.COLORS.DARK_GRAY} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.content}>
        <Text style={styles.earlierText}>Earlier</Text>

        {renderNotification('Dillon Korman', '2d', true)}
        {renderNotification('Jenny McKendry', '2d', false)}
        {renderNotification('Jen Wu', '2d', false)}
        {renderNotification('Toni Pantone', '2d', false)}
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
    marginBottom: 4,
    fontSize: 18,
    fontWeight: 'bold'
  },
  notification: {
    width: '100%',
    height: 94,
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  notificationImageArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationImage: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: theme.COLORS.FACEBOOK_GRAY
  },
  notificationType: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  notificationTextArea: {
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: 14
  },
  notificationContent: {
    fontSize: 17,
    fontWeight: '300'
  },
  notificationTime: {
    fontSize: 13,
    fontWeight: '300',
    color: theme.COLORS.GRAY
  },
  boldText: {
    fontWeight: '500'
  }
});

export default NotificationContent;
