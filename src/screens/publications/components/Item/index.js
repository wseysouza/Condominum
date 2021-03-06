import React from 'react';
import moment from 'moment';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export const Item = ({ onPress, item, isLast }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({ isLast }).container}>
			<Text style={styles({}).title}>{item?.titulo}</Text>
			<Text style={styles({}).subTitle}>{item?.texto_resumido}</Text>
			<Text style={styles({}).seeMore}>Ver mais...</Text>
			<Text style={styles({}).baseboard}>
				{moment(item?.dt_pub_inicio, 'DD-MM-YYYY HH: mm: ss').format(
					'DD/MM/YYYY',
				)}
			</Text>
		</View>
	</TouchableOpacity>
);

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	isLast: PropTypes.bool,
	item: PropTypes.shape({
		titulo: PropTypes.string,
		texto_resumido: PropTypes.string,
		dt_pub_inicio: PropTypes.string,
	}).isRequired,
};

Item.defaultProps = {
	isLast: false,
};
