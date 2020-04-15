import React from 'react';
import { StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { theme, Images } from '@constants';
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

  const renderCardButton = (icon: any, label: string, border: boolean = true) => {
    return (
      <TouchableOpacity>
        <View style={styles.cardButton}>
          <Image style={styles.cardButtonImage} source={icon} resizeMode="contain" />

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

          <View
            style={[
              styles.content,
              {
                paddingBottom: insets.bottom
              }
            ]}
          >
            <Text style={styles.headerText}>Quick access to control your privacy and ad preferences</Text>

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
                {renderCardButton(Images.IconHat, 'Learn about ads')}
                {renderCardButton(Images.IconNews, 'Review your ad preferences')}
                {renderCardButton(Images.IconThreeDots, 'See your ad settings', false)}
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
  cardButtonImage: {
    width: 24,
    height: 24
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
