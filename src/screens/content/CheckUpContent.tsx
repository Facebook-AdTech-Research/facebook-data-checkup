import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { theme, Images } from '@constants';
import { Header, Text, Icon } from '@components';
import { NavigationTypes } from '@types';
import { HeaderHeight } from '@services/utils';
import CAROUSEL_DATA, { TCarouselData } from '@constants/CarouselData';

const { width, height } = Dimensions.get('screen');

const sliderWidth = width;
const entryWidth = width - 32;

const CheckUpContent: React.FC<{
  navigation: NavigationTypes.ParamType;
}> = ({ navigation }) => {
  const insets = useSafeArea();

  const scrollRef = React.useRef(undefined);

  const [useData, setUseData] = React.useState<{ [key: string]: boolean }>({
    'Activity across Facebook products': true,
    'Activity on other websites and apps': false,
    'Accounts with other businesses': false,
    'Your declared interests': true,
    'Your location': true
  });

  const goBack = () => {
    navigation.goBack();
  };

  const toggleUseData = React.useCallback(
    (dataType: string) => {
      setUseData({
        ...useData,
        [dataType]: !useData[dataType]
      });
    },
    [useData]
  );

  const onPressCarousel = React.useCallback(
    (item: TCarouselData) => {
      scrollRef?.current?.scrollTo({ y: 300 });
    },
    [scrollRef]
  );

  const renderCarouselItem = ({ item, index }: { item: TCarouselData; index: number }) => {
    return (
      <TouchableWithoutFeedback key={index} onPress={() => onPressCarousel(item)}>
        <View style={styles.carouselItem}>
          <View style={styles.shadow} />
          <View style={styles.carouselItemContent}>
            <Text
              style={[
                styles.carouselTitle,
                !useData[item.dataType] && {
                  color: theme.COLORS.GRAY
                }
              ]}
            >
              {item.dataType}
            </Text>

            <Text style={styles.carouselDescription}>{item.description}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderCarousel = () => {
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          data={CAROUSEL_DATA}
          firstItem={0}
          layout="stack"
          renderItem={renderCarouselItem}
          sliderWidth={sliderWidth}
          itemWidth={entryWidth}
          inactiveSlideOpacity={1}
          hasParallaxImages={false}
          loop={false}
          autoplay={false}
        />
      </View>
    );
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
        <ScrollView ref={ref => (scrollRef.current = ref)} contentContainerStyle={styles.scrollContent}>
          <View style={styles.behindContent} />
          <View style={styles.headerImageWrapper}>
            <Image style={styles.headerImage} source={Images.CheckUpTop} resizeMode="contain" />
          </View>

          <View style={styles.content}>
            <Text style={styles.headerText}>Quick access to control your privacy and ad preferences</Text>

            {renderCarousel()}

            <View style={styles.card}>
              <View style={styles.cardImageWrapper}>
                <Image style={styles.cardImage} source={Images.AdCheckUp} resizeMode="contain" />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTitleArea}>
                  <Text style={styles.cardTitle}>Ad Data Usage</Text>
                  <Text style={styles.cardSubtitle}>
                    Protecting people's privacy is central to how we've designed our ad system. We will only use the
                    data you have enabled below. You will still see the same number of ads but can control how we choose
                    them.
                  </Text>
                </View>
              </View>

              <View style={styles.cardButtonArea}>
                {CAROUSEL_DATA.map((entry: TCarouselData, index: number) => (
                  <React.Fragment key={index}>
                    {renderCardButton(
                      null,
                      renderCheckbox(useData[entry.dataType]),
                      entry.dataType,
                      index !== CAROUSEL_DATA.length - 1,
                      () => toggleUseData(entry.dataType)
                    )}
                  </React.Fragment>
                ))}
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
    marginBottom: 0,
    marginHorizontal: 16,
    textAlign: 'center',
    fontSize: 17,
    color: theme.COLORS.DARK_GRAY
  },
  carouselContainer: {
    width: '100%',
    height: 200
  },
  carouselItem: {
    width: '100%',
    height: '100%',
    paddingVertical: 16,
    borderRadius: 8
  },
  shadow: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    bottom: 16,
    borderRadius: 8,
    backgroundColor: theme.COLORS.WHITE,
    shadowRadius: 10,
    shadowColor: theme.COLORS.BLACK,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 }
  },
  carouselItemContent: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: theme.COLORS.WHITE
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: '700'
  },
  carouselDescription: {
    fontSize: 14,
    lineHeight: 22,
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
