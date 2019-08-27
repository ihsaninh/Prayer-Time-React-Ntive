import React, { PureComponent } from 'react';
import { View, ImageBackground, ScrollView, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import hijri from 'moment-hijri';
import PrayerHeader from './components/PrayerHeader';
import PrayerLocation from './components/PrayerLocation';
import PrayerInfo from './components/PrayerInfo';
import PrayerTime from './components/PrayerTime';
import Color from '../../utils/Color';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prayer: '',
      city: 'Tangerang',
      school: 10,
      location: '',
      fullLocation: '',
      date: '',
      dateHijri: '',
    };
  }

  componentDidMount() {
    this.getDataPrayer();
  }

  getDataPrayer() {
    const { city, school } = this.state;
    axios
      .get(`https://api.pray.zone/v2/times/today.json`, {
        params: {
          city,
          school,
        },
      })
      .then(res => {
        this.setState({
          prayer: res.data.results.datetime[0].times,
          location: res.data.results.location.city,
          fullLocation: `${res.data.results.location.city}, ${res.data.results.location.country}`,
          date: res.data.results.datetime[0].date.gregorian,
          dateHijri: res.data.results.datetime[0].date.hijri,
        });
      });
  }

  render() {
    const { prayer, location, fullLocation, date, dateHijri } = this.state;
    return (
      <ImageBackground source={require('../../assets/img/mosque.jpg')} style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,.4)" barStyle="light-content" />
        <View style={styles.overlay}>
          <View style={styles.content}>
            <PrayerHeader title="Prayer Time" />
            <PrayerLocation location={location} />
          </View>
          <View style={styles.prayerContent}>
            <PrayerInfo
              dateHijri={hijri(dateHijri, 'iYYYY-iMM-iDD').format('iYYYY iMMMM iD')}
              dateGreforian={moment(date, 'YYYY-MM-DD').format('D MMMM YYYY')}
              fullLocation={fullLocation}
            />
            <ScrollView>
              <PrayerTime name="Imsak" time={prayer.Imsak} />
              <PrayerTime name="Subuh" time={prayer.Fajr} />
              <PrayerTime name="Terbit" time={prayer.Sunrise} />
              <PrayerTime name="Dzuhur" time={prayer.Dhuhr} />
              <PrayerTime name="Ashar" time={prayer.Asr} />
              <PrayerTime name="Maghrib" time={prayer.Maghrib} />
              <PrayerTime name="Isya" time={prayer.Isha} />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    marginHorizontal: 10,
    marginTop: 5,
    flex: 1,
  },
  prayerContent: {
    flex: 4,
    marginHorizontal: 10,
  },
  header: {
    marginTop: 30,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerCity: {
    fontSize: 25,
    fontWeight: '700',
    color: Color.COLOR_PRIMARY,
  },
  headerMargin: {
    marginRight: 10,
  },
});

export default Home;
