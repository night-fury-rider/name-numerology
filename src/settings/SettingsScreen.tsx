import Badge from 'common/components/Badge';
import {StyleSheet, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {List, Divider, useTheme} from 'react-native-paper';

const SettingsScreen = () => {
  const theme = useTheme();

  const styles = getStyles(theme.colors.background);

  return (
    <View style={[styles.container]}>
      <Divider />
      <List.Item
        title="App Version"
        left={props => (
          <List.Icon
            {...props}
            icon="information"
            style={{display: 'flex', marginHorizontal: 10}}
          />
        )}
        onPress={() => {}}
        right={() => (
          <View style={styles.rightContainer}>
            <Badge
              value={DeviceInfo.getVersion()}
              customStyles={styles.badge}></Badge>
          </View>
        )}
      />

      <Divider />
    </View>
  );
};

const getStyles = (containerBackgroundColor: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: containerBackgroundColor,
    },
    badge: {
      borderRadius: 50,
      height: 40,
      width: 60,
    },
    badgeRound: {
      borderRadius: 50,
      height: 40,
      width: 40,
    },
    rightContainer: {
      justifyContent: 'center',
    },
  });

export default SettingsScreen;
