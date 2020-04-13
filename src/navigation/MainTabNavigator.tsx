import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { theme, Images } from '@constants';
import { Icon, TabBar } from '@components';
import { HomeScreen, UserScreen, GroupScreen, NotificationScreen, MenuScreen } from '@screens';

const HomeStack = createStackNavigator({
  Map: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Home',
  activeTintColor: 'white',
  inactiveTintColor: 'black',
  tabBarIcon: ({ tintColor }) => <Image style={styles.iconHome} source={Images.IconHome} resizeMode="contain" />
});

const UserStack = createStackNavigator({
  Profile: {
    screen: UserScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

UserStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => <Image style={styles.iconUser} source={Images.IconUser} resizeMode="contain" />
});

const GroupStack = createStackNavigator({
  Profile: {
    screen: GroupScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

GroupStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Groups',
  tabBarIcon: ({ tintColor }) => <Image style={styles.iconGroup} source={Images.IconGroup} resizeMode="contain" />
});

const NotificationStack = createStackNavigator({
  Profile: {
    screen: NotificationScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

NotificationStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ tintColor }) => <Image style={styles.iconBell} source={Images.IconBell} resizeMode="contain" />
});

const MenuStack = createStackNavigator({
  Profile: {
    screen: MenuScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

MenuStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Menu',
  tabBarIcon: ({ tintColor }) => <Image style={styles.iconMenu} source={Images.IconMenu} resizeMode="contain" />
});

const styles = StyleSheet.create({
  iconHome: {
    width: 28,
    height: 28
  },
  iconUser: {
    width: 28,
    height: 28
  },
  iconGroup: {
    width: 28,
    height: 28
  },
  iconBell: {
    width: 28,
    height: 28
  },
  iconMenu: {
    width: 28,
    height: 28
  }
});

export default createBottomTabNavigator(
  {
    HomeStack,
    UserStack,
    GroupStack,
    NotificationStack,
    MenuStack
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: theme.COLORS.BLACK,
      inactiveTintColor: '#B1B6C0'
    }
  }
);
