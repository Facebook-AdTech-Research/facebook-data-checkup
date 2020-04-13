import React from 'react';

import { NavigationTypes } from '@types';
import CheckUpContent from '@screens/content/CheckUpContent';

const CheckUpScreen: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  return <CheckUpContent navigation={navigation} />;
};

export default CheckUpScreen;
