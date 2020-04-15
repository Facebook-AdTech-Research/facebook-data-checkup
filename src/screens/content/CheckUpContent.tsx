import React from 'react';
import { StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { theme, Images } from '@constants';
import { Header, Text, Icon } from '@components';
import { NavigationTypes } from '@types';
import { HeaderHeight } from '@services/utils';

const CheckUpContent: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  const insets = useSafeArea();

  const [useAcrossFacebook, setUseAcrossFacebook] = React.useState<boolean>(true);
  const [useOtherBusinesses, setUseOtherBusinesses] = React.useState<boolean>(false);
  const [useOtherWebsites, setUseOtherWebsites] = React.useState<boolean>(false);
  const [useLocation, setUseLocation] = React.useState<boolean>(true);

  const goBack = () => {
    navigation.goBack();
  };

  const renderCheckbox = checked => {
    return (
      <Icon
        family="MaterialCommunityIcons"
        name={checked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
        size={24}
        color={theme.COLORS.BLACK}
      />
    );
  };

  const renderCardButton = (image: any, icon: any, label: string, border: boolean = true, onPress?: () => void) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardButton}>
          <View style={styles.cardButtonImageWrapper}>
            {image !== null && <Image style={styles.cardButtonImage} source={image} resizeMode="contain" />}
            {icon !== null && icon}
          </View>

          <View
            style={[
              styles.cardButtonLabelWrapper,
              !border && {
                borderBottomWidth: 0
              }
            ]}
          >
            <Text style={styles.cardButtonLabel}>{label}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.flex}>
      <Header title="Privacy Checkup" showBackButton={true} onPressBackButton={goBack} />

      <View
        style={[
          styles.wrapper,
          {
            top: insets.top + HeaderHeight
          }
        ]}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.behindContent} />
          <View style={styles.headerImageWrapper}>
            <Image style={styles.headerImage} source={Images.CheckUpTop} resizeMode="contain" />
          </View>

          <View style={styles.content}>
            <Text style={styles.headerText}>Quick access to control your privacy and ad preferences</Text>

            <View style={styles.card}>
              <View style={styles.cardImageWrapper}>
                <Image style={styles.cardImage} source={Images.AdCheckUp} resizeMode="contain" />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTitleArea}>
                  <Text style={styles.cardTitle}>Data Usage</Text>
                  <Text style={styles.cardSubtitle}>
                    We want you to know how data is used to show you ads without advertisers knowing who you are.
                    Protecting people's privacy is central to how we've designed our ad system.
                  </Text>
                </View>
              </View>

              <View style={styles.cardButtonArea}>
                {renderCardButton(
                  null,
                  renderCheckbox(useAcrossFacebook),
                  'Activity across Facebook products',
                  true,
                  () => setUseAcrossFacebook(!useAcrossFacebook)
                )}
                {renderCardButton(
                  null,
                  renderCheckbox(useOtherBusinesses),
                  'Activity with other businesses',
                  true,
                  () => setUseOtherBusinesses(!useOtherBusinesses)
                )}
                {renderCardButton(
                  null,
                  renderCheckbox(useOtherWebsites),
                  'Activity on other websites and apps',
                  true,
                  () => setUseOtherWebsites(!useOtherWebsites)
                )}
                {renderCardButton(null, renderCheckbox(useLocation), 'Your location', false, () =>
                  setUseLocation(!useLocation)
                )}
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardImageWrapper}>
                <Image style={styles.cardImage} source={Images.AdPrefs} resizeMode="contain" />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTitleArea}>
                  <Text style={styles.cardTitle}>Ad Preferences</Text>
                  <Text style={styles.cardSubtitle}>
                    Learn how ads work on Facebook and how we use data to make the ads you see more relevant.
                  </Text>
                </View>
              </View>

              <View style={styles.cardButtonArea}>
                {renderCardButton(Images.IconHat, null, 'Learn about ads')}
                {renderCardButton(Images.IconNews, null, 'Review your ad preferences')}
                {renderCardButton(Images.IconThreeDots, null, 'See your ad settings', false)}
              </View>
            </View>
          </View>
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
  behindContent: {
    position: 'absolute',
    top: -240,
    left: 0,
    right: 0,
    height: 250,
    backgroundColor: 'rgb(120, 167, 253)'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.COLORS.WHITE
  },
  headerImageWrapper: {
    width: '100%'
  },
  headerImage: {
    width: '100%',
    height: 110
  },
  headerText: {
    marginTop: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    textAlign: 'center',
    fontSize: 17,
    color: theme.COLORS.DARK_GRAY
  },
  card: {
    minHeight: 48,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: theme.COLORS.WHITE,
    shadowRadius: 40,
    shadowColor: theme.COLORS.BLACK,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 16 }
  },
  cardImageWrapper: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  cardImage: {
    width: '100%',
    height: 107
  },
  cardContent: {
    marginTop: 10,
    marginBottom: 2,
    marginHorizontal: 18
  },
  cardTitleArea: {
    marginBottom: 12
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700'
  },
  cardSubtitle: {
    fontSize: 17,
    lineHeight: 22,
    color: theme.COLORS.DARK_GRAY
  },
  cardButtonArea: {
    marginLeft: 18
  },
  cardButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardButtonImageWrapper: {
    width: 24,
    height: 24
  },
  cardButtonImage: {
    width: '100%',
    height: '100%'
  },
  cardButtonLabelWrapper: {
    marginLeft: 12,
    flexGrow: 1,
    borderBottomColor: theme.COLORS.SUPER_LIGHT_GRAY,
    borderBottomWidth: 2
  },
  cardButtonLabel: {
    paddingVertical: 13,
    fontSize: 16,
    color: theme.COLORS.GRAY_BLUE
  }
});

export default CheckUpContent;
