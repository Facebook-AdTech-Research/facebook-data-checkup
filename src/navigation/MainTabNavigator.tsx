import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { theme, Images } from '@constants';
import { Icon, TabBar } from '@components';
import { HomeScreen, UserScreen, GroupScreen, NotificationScreen, MenuScreen, CheckUpScreen } from '@screens';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => <Image style={styles.iconHome} source={Images.IconHome} resizeMode="contain" />
});

const UserStack = createStackNavigator({
  User: {
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
  Group: {
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
  Notification: {
    screen: NotificationScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  CheckUp: {
    screen: CheckUpScreen,
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
  Menu: {
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
    width: 30,
    height: 30
  },
  iconUser: {
    width: 30,
    height: 30
  },
  iconGroup: {
    width: 30,
    height: 30
  },
  iconBell: {
    width: 30,
    height: 30
  },
  iconMenu: {
    width: 30,
    height: 30
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
    initialRouteName: 'NotificationStack',
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: theme.COLORS.BLACK,
      inactiveTintColor: '#B1B6C0'
    }
  }
);
