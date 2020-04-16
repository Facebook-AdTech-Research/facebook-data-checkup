import { Images } from '@constants';

export interface TCarouselData {
  dataType: string;
  description: string;
  images: Array<any>;
  adDescription: string;
}

const data: Array<TCarouselData> = [
  {
    dataType: 'Activity across Facebook products',
    description: 'Ads are shown to you based on your activity across Facebook companies and products.',
    images: [Images.AdFightingIllini, Images.AdChipotle, Images.AdNetflix],
    adDescription: 'Fighting Illini, Chipotle, Netflix and 19 others'
  },
  {
    dataType: 'Activity on other websites and apps',
    description:
      'When you share information with a business, they might add it to a customer list matched to your profile. We try to match the ad to the most relevant audience.',
    images: [Images.AdAdobe, Images.AdQuartz, Images.AdDisneyPlus],
    adDescription: 'Adobe, Quartz, Disney+ and 33 others'
  },
  {
    dataType: 'Accounts with other businesses',
    description:
      "Websites you visit or apps you use can send Facebook data directly to help us show you ads based on products or services you've looked at.",
    images: [Images.AdRobinhood, Images.AdSalesforce, Images.AdDropbox],
    adDescription: 'Robinhood, Salesforce, Dropbox and 12 others'
  },
  {
    dataType: 'Your declared interests',
    description:
      'You can specify types of ads that you would like to see by adding and removing interests in ad preferences below. We automatically assign some based on your activity on Facebook.',
    images: [Images.AdApple, Images.AdAmazon, Images.AdUber],
    adDescription: 'Apple, Amazon, Uber and 23 others'
  },
  {
    dataType: 'Your location',
    description:
      'We use location data to show you ads from advertisers trying to reach people in or near a specific place.',
    images: [Images.AdMuseum, Images.AdFenway, Images.AdStowOrchards],
    adDescription: 'MFA Boston, Fenway, Stow Orchards and 9 others'
  }
];

export default data;
