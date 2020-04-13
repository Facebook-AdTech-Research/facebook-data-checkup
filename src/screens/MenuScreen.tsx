import React from 'react';

import { NavigationTypes } from '@types';
import MenuContent from '@screens/content/MenuContent';

const MenuScreen: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  return <MenuContent navigation={navigation} />;
};

export default MenuScreen;
