import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Color } from '../../../utils/Color';

const styles = StyleSheet.create({
  prayerInfo: {
    alignItems: 'center',
  },
  nextPrayerInfoTitle: {
    fontSize: 26,
    color: Color.COLOR_PRIMARY,
  },
  nextPrayerInfoSub: {
    fontSize: 18,
    color: Color.COLOR_SECONDARY,
    paddingTop: 5,
  },
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

const PrayerInfo = props => {
  const { infoTitle, infoSub, dateGreforian, dateHijri, fullLocation } = props;
  return (
    <View>
      <View style={styles.prayerInfo}>
        <Text style={styles.nextPrayerInfoTitle}>{infoTitle}</Text>
        <Text style={styles.nextPrayerInfoSub}>{infoSub}</Text>
      </View>
      <View style={styles.todayDate}>
        <Text style={styles.dateGregorian}>{dateGreforian}</Text>
        <Text style={styles.dateHijri}>{dateHijri}</Text>
      </View>
      <View>
        <Text style={styles.fullLocation}>Wilayah: {fullLocation}</Text>
      </View>
    </View>
  );
};

PrayerInfo.propTypes = {
  infoTitle: PropTypes.string.isRequired,
  infoSub: PropTypes.string.isRequired,
  dateGreforian: PropTypes.string.isRequired,
  dateHijri: PropTypes.string.isRequired,
  fullLocation: PropTypes.string.isRequired,
};

export default PrayerInfo;
