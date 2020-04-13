import React from 'react';
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { theme } from '@constants';
import { HeaderHeight } from '@services/utils';
import { NavigationTypes } from '@types';
import { Text } from '@components';

const NotificationContent: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  const insets = useSafeArea();

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
    );
  };

  return (
    <View style={styles.flex}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top
          }
        ]}
      >
        {renderHeader()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  content: {
    flexGrow: 1
  },
  header: {
    width: '100%',
    height: HeaderHeight,
    paddingTop: 6,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default NotificationContent;
