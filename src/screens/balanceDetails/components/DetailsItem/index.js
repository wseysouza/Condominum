import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Pallete, Strings } from '../../../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../../../components/ValueFormat';

const DetailsItem = ({
	data,
	despesasDiversas,
	honorariosSindico,
	luzForca,
}) => (
	<View style={styles.card}>
		<View style={styles.colLeft}>
			<Text style={styles.cardTitle}>{`Dia ${data}`}</Text>
			<Text style={Pallete.paragraph}>{Strings.despesasDiversas}</Text>
			<Text style={Pallete.paragraph}>{Strings.honorariosSindico}</Text>
			<Text style={Pallete.paragraph}>{Strings.luzForca}</Text>
		</View>
		<View style={styles.colRight}>
			<ValueFormat
				style={{
					...styles.h3,
					color:
						despesasDiversas >= 0
							? Colors.secondary
							: Colors.primary,
				}}
				value={despesasDiversas}
			/>

			<ValueFormat style={styles.h3} value={honorariosSindico} />
			<ValueFormat style={styles.h3} value={luzForca} />
		</View>
	</View>
);

export default DetailsItem;

DetailsItem.propTypes = {
	data: PropTypes.string,
	despesasDiversas: PropTypes.number,
	honorariosSindico: PropTypes.number,
	luzForca: PropTypes.number,
};

DetailsItem.defaultProps = {
	data: '',
	despesasDiversas: 0,
	honorariosSindico: 0,
	luzForca: 0,
};