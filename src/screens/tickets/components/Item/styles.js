import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = (p) =>
	StyleSheet.create({
		bodyLeft: {
			alignItems: 'flex-start',
			flexDirection: 'column',
			height: 110,
			justifyContent: 'center',
			width: '80%',
		},

		bodyRight: {
			alignItems: 'center',
			flexDirection: 'row',
			height: 110,
			justifyContent: 'flex-end',
			width: '20%',
		},

		container: {
			alignItems: 'center',
			backgroundColor: Colors.white,
			borderRadius: 5,
			flexDirection: 'row',
			flex: 1,
			justifyContent: 'center',
			marginTop: 10,
			paddingHorizontal: 10,
			paddingVertical: 10,
			width: '100%',
		},

		h3: {
			color: Colors.secondary,
			fontFamily: 'Roboto-Regular',
			fontSize: 15,
			marginRight: 5,
		},

		label: {
			borderColor: p.borderColor,
			borderRadius: 25,
			borderStyle: 'solid',
			borderWidth: 1,
			flexDirection: 'row',
			paddingHorizontal: 10,
			paddingVertical: 10,
			width: 220,
		},

		rowTicket: {
			alignItems: 'center',
			flexDirection: 'row',
			marginBottom: 10,
			width: 210,
		},

		text: {
			color: p.color,
			fontFamily: 'Roboto-Regular',
			fontSize: 14,
		},

		value: {
			color: Colors.secondary,
			fontFamily: 'Roboto-Bold',
			fontSize: 20,
			marginBottom: 5,
		},
	});

export default styles;
