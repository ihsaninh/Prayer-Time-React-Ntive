import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from "../../../utils/Color";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerCity}>{props.location}</Text>
			<View style={styles.headerDirection}>
				<Icon name="explore" size={27} color={Color.COLOR_PRIMARY} style={styles.headerMargin} />
				<Icon name="edit-location" size={27} color={Color.COLOR_PRIMARY} style={styles.headerMargin} />
				<Icon name="settings" size={27} color={Color.COLOR_PRIMARY} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		marginTop: 30,
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	headerCity: {
		fontSize: 25,
		fontWeight: '700',
		color: Color.COLOR_PRIMARY
	},
	headerDirection: { 
		flexDirection: 'row'
	},
	headerMargin: {
		marginRight: 10
	}
})

export default Header;