export interface TCarouselData {
  dataType: string;
  description: string;
}

const data: Array<TCarouselData> = [
  {
    dataType: 'Activity across Facebook products',
    description: 'Ads are shown to you based on your activity across Facebook companies and products.'
  },
  {
    dataType: 'Activity on other websites and apps',
    description:
      'When you share information with a business, they might add it to a customer list matched to your profile. We try to match the ad to the most relevant audience.'
  },
  {
    dataType: 'Accounts with other businesses',
    description:
      "Websites you visit or apps you use can send Facebook data directly to help us show you ads based on products or services you've looked at."
  },
  {
    dataType: 'Your declared interests',
    description:
      'You can specify types of ads that you would like to see by adding and removing interests in your ad preferences below. We automatically assign some interests based on your activity on Facebook.'
  },
  {
    dataType: 'Your location',
    description:
      'We use location data to show you ads from advertisers trying to reach people in or near a specific place.'
  }
];

export default data;
