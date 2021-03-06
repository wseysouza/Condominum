import { StyleSheet } from 'react-native';
import { Colors } from '../../../../lib/constants';

const styles = StyleSheet.create({
	baseboard: {
		color: Colors.secondary_470,
		flexDirection: 'row',
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		textAlign: 'center',
		width: '100%',
	},

	body: {
		marginBottom: 24,
		padding: 13,
		width: '100%',
	},

	container: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 5,
		elevation: 3,
		justifyContent: 'space-between',

		marginTop: 20,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},

	containerSeeAll: {
		borderTopColor: Colors.secondary_470,
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 19,
		paddingVertical: 16,
		width: '100%',
	},

	h1: {
		color: Colors.secondary,
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
	},

	image: {
		borderRadius: 5,
		height: 120,
		marginBottom: 10,
		width: '100%',
	},

	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
		width: '100%',
	},

	title: {
		color: Colors.primary,
		fontFamily: 'Roboto-Regular',
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'center',
		width: '100%',
	},
});

export default styles;
