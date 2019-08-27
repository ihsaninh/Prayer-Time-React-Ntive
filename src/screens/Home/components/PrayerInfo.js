import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Color } from '../../../utils/Color';

const PrayerInfo = props => {
  const { dateGreforian, dateHijri, fullLocation } = props;
  return (
    <View>
      <View style={styles.todayDate}>
        <Text style={styles.dateHijri}>{dateHijri}</Text>
        <Text style={styles.dateGregorian}>{dateGreforian}</Text>
      </View>
      <View>
        <Text style={styles.fullLocation}>Wilayah: {fullLocation}</Text>
      </View>
    </View>
  );
};

PrayerInfo.propTypes = {
  dateGreforian: PropTypes.string.isRequired,
  dateHijri: PropTypes.string.isRequired,
  fullLocation: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  todayDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dateGregorian: {
    fontSize: 17,
    color: Color.COLOR_PRIMARY,
    fontWeight: '700',
  },
  dateHijri: {
    fontSize: 17,
    color: Color.COLOR_PRIMARY,
    fontWeight: '700',
  },
  fullLocation: {
    fontSize: 16,
    color: Color.COLOR_SECONDARY,
    paddingTop: 5,
    paddingBottom: 10,
  },
});

export default PrayerInfo;
