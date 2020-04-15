import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { theme } from '@constants';
import { Header, Text } from '@components';
import { NavigationTypes } from '@types';
import { HeaderHeight } from '@services/utils';

const CheckUpContent: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  const insets = useSafeArea();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.flex}>
      <Header title="Shared Data" showBackButton={true} onPressBackButton={goBack} />

      <View
        style={[
          styles.wrapper,
          {
            top: insets.top + HeaderHeight
          }
        ]}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View
            style={[
              styles.content,
              {
                paddingBottom: insets.bottom
              }
            ]}
          ></View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  scrollContent: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1
  }
});

export default CheckUpContent;
