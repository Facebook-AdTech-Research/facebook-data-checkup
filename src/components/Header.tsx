import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { theme } from '@constants';
import Text from '@components/Text';
import BackButton from '@components/BackButton';
import { HeaderHeight } from '@services/utils';

const Header: React.FC<{
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  rightButton?: React.ReactElement;
  onPressBackButton?(): void;
}> = ({ title = '', subtitle = '', showBackButton = false, rightButton, onPressBackButton = () => {} }) => {
  const insets = useSafeArea();

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.header,
          {
            marginTop: insets.top
          }
        ]}
      >
        {showBackButton && <BackButton onPress={onPressBackButton} color={theme.COLORS.GRAY_BLUE} />}

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle !== '' && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        {rightButton}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: theme.COLORS.WHITE
  },
  header: {
    height: HeaderHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 17,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 12,
    color: theme.COLORS.DARK_GRAY
  },
  rightButtonContainer: {}
});

export default Header;
