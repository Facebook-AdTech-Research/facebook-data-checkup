import React from 'react';

import { NavigationTypes } from '@types';
import AboutContent from '@screens/content/AboutContent';

const AboutScreen: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  return <AboutContent navigation={navigation} />;
};

export default AboutScreen;
