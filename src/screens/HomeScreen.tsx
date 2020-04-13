import React from 'react';

import { NavigationTypes } from '@types';
import HomeContent from '@screens/content/HomeContent';

const HomeScreen: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  return <HomeContent navigation={navigation} />;
};

export default HomeScreen;
