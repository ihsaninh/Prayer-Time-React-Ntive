import React, { Component } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  StatusBar
} from "react-native";
import Header from "./components/Header";
import PrayerInfo from "./components/PrayerInfo";
import PrayerTime from "./components/PrayerTime";
import { Color } from "../../utils/Color";

class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/img/mosque.jpg")}
        style={styles.container}
      >
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0,0,0,.4)"
          barStyle="light-content"
        />
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Header location="Cibinong" />
            <PrayerInfo
              infoTitle="Sebentar lagi waktu Subuh"
              infoSub="21 Menit lagi"
              dateGreforian="16 Dzulhijjah 1440 H"
              dateHijri="17 Agustus 2019"
              fullLocation="Cibinong, Kabupaten Bogor - Indonesia"
            />
            <ScrollView>
              <PrayerTime prayerName="Imsak" prayerTime="04:33" />
              <PrayerTime prayerName="Subuh" prayerTime="04:43" />
              <PrayerTime prayerName="Dzuhur" prayerTime="11:59" />
              <PrayerTime prayerName="Ashar" prayerTime="15:20" />
              <PrayerTime prayerName="Maghrib" prayerTime="17:57" />
              <PrayerTime prayerName="Isya" prayerTime="19:06" />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  content: {
    marginHorizontal: 10,
    marginTop: 5,
    flex: 1
  },
  header: {
    marginTop: 30,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerCity: {
    fontSize: 25,
    fontWeight: "700",
    color: Color.COLOR_PRIMARY
  },
  headerMargin: {
    marginRight: 10
  }
});

export default Home;
