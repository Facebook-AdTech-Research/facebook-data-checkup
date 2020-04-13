import React from 'react';

import { NavigationTypes } from '@types';
import UserContent from '@screens/content/UserContent';

const UserScreen: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  return <UserContent navigation={navigation} />;
};

export default UserScreen;
