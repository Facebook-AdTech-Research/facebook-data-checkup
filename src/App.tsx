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

const assetImages: Array<any> = [
  Images.IconFacebook,
  Images.IconHome,
  Images.IconUser,
  Images.IconGroup,
  Images.IconBell,
  Images.IconMenu,
  Images.IconHat,
  Images.IconNews,
  Images.IconThreeDots,
  Images.DillonKorman,
  Images.JeffTaylorChang,
  Images.JennyMcKendry,
  Images.JenWu,
  Images.ToniPantone,
  Images.CheckUpTop,
  Images.AdCheckUp,
  Images.AdPrefs,
  Images.AdFightingIllini,
  Images.AdChipotle,
  Images.AdNetflix,
  Images.AdAdobe,
  Images.AdQuartz,
  Images.AdDisneyPlus,
  Images.AdRobinhood,
  Images.AdSalesforce,
  Images.AdDropbox,
  Images.AdApple,
  Images.AdAmazon,
  Images.AdUber,
  Images.AdMuseum,
  Images.AdFenway,
  Images.AdStowOrchards
];

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
    await Promise.all([...cacheImages(assetImages), Font.loadAsync({})]);
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
