import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import { Images, theme } from '@constants';
import AppNavigator from '@navigation/TabAppNavigator';
import { setTopLevelNavigator } from '@navigation/NavigationService';

enableScreens();

const assetImages: Array<any> = [];

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);

  const _loadResourcesAsync = async () => {
    await Promise.all([
      ...cacheImages(assetImages),
      Font.loadAsync({
        OpenSans: require('../assets/font/OpenSans-Regular.ttf'),
        'OpenSans-Bold': require('../assets/font/OpenSans-Bold.ttf'),
        'OpenSans-SemiBold': require('../assets/font/OpenSans-SemiBold.ttf'),
        'OpenSans-Light': require('../assets/font/OpenSans-Light.ttf')
      })
    ]);
  };

  const _handleLoadingError = (error: any) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  const _handleFinishLoading = () => {
    setIsLoadingComplete(true);
  };

  if (!isLoadingComplete) {
    return (
      <AppLoading startAsync={_loadResourcesAsync} onError={_handleLoadingError} onFinish={_handleFinishLoading} />
    );
  } else {
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />

        <SafeAreaProvider>
          <View style={styles.flex}>
            <AppNavigator ref={navigatorRef => setTopLevelNavigator(navigatorRef)} />
          </View>
        </SafeAreaProvider>
      </React.Fragment>
    );
  }
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});

export default App;
