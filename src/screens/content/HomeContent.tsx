import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@constants';
import { Text } from '@components';
import { NavigationTypes } from '@types';

const HomeContent: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  return (
    <View style={styles.flex}>
      <View style={styles.content}>
        <Text>Content goes here...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeContent;
