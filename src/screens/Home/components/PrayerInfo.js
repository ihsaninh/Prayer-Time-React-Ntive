import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color } from "../../../utils/Color";

const PrayerInfo = (props) => {
	return (
		<View>
			<View style={styles.prayerInfo}>
				<Text style={styles.nextPrayerInfoTitle}>{props.infoTitle}</Text>
				<Text style={styles.nextPrayerInfoSub}>{props.infoSub}</Text>
			</View>
			<View style={styles.todayDate}>
				<Text style={styles.dateGregorian}>{props.dateGreforian}</Text>
				<Text style={styles.dateHijri}>{props.dateHijri}</Text>
			</View>
			<View>
				<Text style={styles.fullLocation}>Wilayah: {props.fullLocation}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	prayerInfo: {
		alignItems: 'center'
	},
	nextPrayerInfoTitle: {
		fontSize: 26, 
		color: Color.COLOR_PRIMARY
	},
	nextPrayerInfoSub: {
		fontSize: 18, 
		color: Color.COLOR_SECONDARY, 
		paddingTop: 5
	},
	todayDate: { 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		marginTop: 20 
	},
	dateGregorian: { 
		fontSize: 17, 
		color: Color.COLOR_PRIMARY, 
		fontWeight: '700' 
	},
	dateHijri: { 
		fontSize: 17, 
		color: Color.COLOR_PRIMARY, 
		fontWeight: '700' 
	},
	fullLocation: {
		fontSize: 16, 
		color: Color.COLOR_SECONDARY, 
		paddingTop: 5,
		paddingBottom: 10
	}

})

export default PrayerInfo;