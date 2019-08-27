import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../../utils/Color';

const PrayerLocation = props => {
  const { location } = props;
  return (
    <View style={styles.container}>
      <View style={styles.prayerLocationContent}>
        <Icon
          name="location-on"
          size={27}
          color={Color.COLOR_PRIMARY}
          style={styles.locationIcon}
        />
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  prayerLocationContent: {
    flexDirection: 'row',
  },
  locationIcon: {
    marginTop: 3,
    marginRight: 5,
  },
  locationText: {
    color: '#ddd',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

PrayerLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default PrayerLocation;
