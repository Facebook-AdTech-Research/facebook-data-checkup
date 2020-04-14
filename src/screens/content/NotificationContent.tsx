import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { theme, Images } from '@constants';
import { HeaderHeight } from '@services/utils';
import { NavigationTypes } from '@types';
import { Text, Icon, GradientView } from '@components';

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
            <Icon family="FontAwesome" name="search" size={20} color={theme.COLORS.BLACK} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderNotification = (image: any, name: string, time: string, unread: boolean) => {
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
            <View style={styles.notificationImageWrapper}>
              <Image style={styles.notificationImage} source={image} resizeMode="cover" />
            </View>

            <View style={styles.notificationTypeWrapper}>
              <GradientView style={styles.notificationType} colors={theme.GRADIENT.BLUE} end={[0, 1]}>
                <Icon
                  style={styles.notificationTypeIcon}
                  family="FontAwesome5"
                  name="user"
                  size={14}
                  color={theme.COLORS.WHITE}
                  solid={true}
                />
              </GradientView>
            </View>
          </View>

          <View style={styles.notificationTextArea}>
            <Text style={styles.notificationContent}>
              <Text style={styles.boldText}>{name}</Text> accepted your friend request.
            </Text>
            <Text style={styles.notificationTime}>{time}</Text>
          </View>

          <TouchableOpacity>
            <Icon family="Entypo" name="dots-three-horizontal" size={21} color={theme.COLORS.DARK_GRAY} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.content}>
        <Text style={styles.earlierText}>Earlier</Text>

        {renderNotification(Images.DillonKorman, 'Dillon Korman', '2d', false)}
        {renderNotification(Images.JennyMcKendry, 'Jenny McKendry', '2d', false)}
        {renderNotification(Images.JenWu, 'Jen Wu', '2d', true)}
        {renderNotification(Images.ToniPantone, 'Toni Pantone', '2d', true)}
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
    paddingTop: 2,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitle: {
    fontSize: 27,
    fontWeight: 'bold'
  },
  searchButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
    marginTop: 15,
    flex: 1
  },
  earlierText: {
    marginHorizontal: 16,
    marginBottom: 4,
    fontSize: 17,
    fontWeight: 'bold'
  },
  notification: {
    width: '100%',
    height: 85,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  notificationImageArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationImageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: theme.COLORS.BORDER,
    borderWidth: 1,
    overflow: 'hidden'
  },
  notificationImage: {
    width: '100%',
    height: '100%'
  },
  notificationTypeWrapper: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: theme.COLORS.BLACK
  },
  notificationType: {
    width: 28,
    height: 28,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationTypeIcon: {
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: theme.COLORS.BLACK
  },
  notificationTextArea: {
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: 12
  },
  notificationContent: {
    fontSize: 15,
    lineHeight: 20
  },
  notificationTime: {
    marginTop: 2,
    fontSize: 12,
    color: theme.COLORS.GRAY
  },
  boldText: {
    fontWeight: '600'
  }
});

export default NotificationContent;
