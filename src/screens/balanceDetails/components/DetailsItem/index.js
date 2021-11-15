import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Colors, Pallete } from '../../../../lib/constants';
import styles from './styles';
import { ValueFormat } from '../../../../components/ValueFormat';

function DetailsItem({ itemDetails }) {
	return (
		<View style={styles.card}>
			<Text style={styles.cardTitle}>{`Dia ${moment(
				itemDetails?.data,
				'DD-MM-YYYY HH: mm: ss',
			).format('DD/MM')}`}</Text>

			<View style={styles.col}>
				<View style={styles.colLeft}>
					<Text style={Pallete.paragraph}>
						{itemDetails.descricao}
					</Text>
				</View>

				<View style={styles.colRight}>
					<ValueFormat
						style={{
							...styles.h3,
							color:
								itemDetails.valor >= 0
									? Colors.secondary
									: Colors.primary,
						}}
						value={itemDetails.valor}
					/>
				</View>
			</View>
		</View>
	);
}

export default DetailsItem;

DetailsItem.propTypes = {
	itemDetails: PropTypes.shape({
		data: PropTypes.string,
		conta: PropTypes.string,
		tipo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		descricao: PropTypes.string,
		valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}).isRequired,
};
