import React from 'react';

import { NavigationTypes } from '@types';
import GroupContent from '@screens/content/GroupContent';

const GroupScreen: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  return <GroupContent navigation={navigation} />;
};

export default GroupScreen;
