import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from "../../../utils/Color";

const PrayerTime = (props) => {
	return (
		<View style={styles.prayerTimeContainer}>
			<View style={styles.prayerTimeMargin}>
				<View style={styles.prayerTimeWrapper}>
					<View style={styles.prayerTimeFill}>
						<Text style={styles.prayerTimeFillName}>{props.prayerName}</Text>
						<View style={styles.prayerTimeFillReal}>
							<Text style={styles.prayerTimeFillTime}>{props.prayerTime}</Text>
							<Icon name="access-time" style={styles.prayerTimeClock} size={27} color={Color.COLOR_PRIMARY}/>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	prayerTimeContainer: {
		marginTop: 5
	},
	prayerTimeMargin: {
		marginBottom: 0
	},
	prayerTimeWrapper: {
		backgroundColor: 'rgba(0,0,0,0.3)', 
		height: 45, 
		justifyContent: 'center', 
		borderRadius: 5
	},
	prayerTimeFill: {
		marginHorizontal: 10, 
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	prayerTimeFillName: {
		fontSize: 20, 
		color: Color.COLOR_PRIMARY
	},
	prayerTimeFillTime: {
		fontSize: 20, 
		color: Color.COLOR_PRIMARY
	},
	prayerTimeFillReal: {
		flexDirection: 'row'
	},
	prayerTimeClock: {
		marginLeft: 5, marginTop: -2
	}
})

export default PrayerTime;