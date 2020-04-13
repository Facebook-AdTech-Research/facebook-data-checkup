import React from 'react';

import { NavigationTypes } from '@types';
import NotificationContent from '@screens/content/NotificationContent';

const NotificationScreen: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  return <NotificationContent navigation={navigation} />;
};

export default NotificationScreen;
