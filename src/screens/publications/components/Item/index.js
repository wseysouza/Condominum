import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export const Item = ({ onPress, item, isLast }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
		<View style={styles({ isLast }).container}>
			<Text style={styles({}).title}>{item.title}</Text>
			<Text style={styles({}).subTitle}>{item.subTitle}</Text>

			<Text style={styles({}).seeMore}>{item.seeMore}</Text>
			<Text style={styles({}).baseboard}>{item.baseboard}</Text>
		</View>
	</TouchableOpacity>
);

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	isLast: PropTypes.bool,
	item: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		seeMore: PropTypes.string,
		baseboard: PropTypes.string,
	}).isRequired,
};

Item.defaultProps = {
	isLast: false,
};
