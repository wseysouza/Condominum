import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import {
	ScrollView,
	Image,
	KeyboardAvoidingView,
	Platform,
	View,
	Alert,
} from 'react-native';
import { Form } from '@unform/mobile';
import { useDispatch } from 'react-redux';

import { authActions } from '../../store/actions';
import { Images, Strings, Pallete } from '../../lib/constants';
import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../lib/utils/getValidationErrors';

function ChangePasswordScreen() {
	const dispatch = useDispatch();

	const formRef = useRef(null);

	const handleSubmit = useCallback(async (password) => {
		try {
			formRef.current?.setErrors({});

			const schema = Yup.object().shape({
				password: Yup.string().min(6, 'No mínimo 6 dígitos'),
				passwordConfirmation: Yup.string().oneOf(
					[Yup.ref('password'), null],
					'As senhas devem corresponder',
				),
			});

			await schema.validate(password, {
				abortEarly: false,
			});

			dispatch(
				authActions.putChangePassword({
					senha: password.password,
				}),
			);
			formRef.current.reset();
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errors = getValidationErrors(err);

				formRef.current?.setErrors(errors);

				return;
			}

			Alert.alert('Erro na autenticação');
		}
	}, []);

	const handleErros = useCallback(() => {
		formRef.current?.setErrors([]);
	}, []);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : null}>
			<ScrollView vertical>
				<View style={Pallete.screen}>
					<Image style={styles.logo} source={Images.logo} />

					<Form ref={formRef} onSubmit={handleSubmit}>
						<Input
							name="password"
							label="Nova Senha"
							labelError="Senha não atende critérios minimos"
							placeholder="Nova Senha - mínimo 6 caracteres"
							passwordProps="password"
							clearErrors={handleErros}
						/>

						<Input
							name="passwordConfirmation"
							label="Confirme a nova senha"
							labelError="Senha não confere com a nova senha"
							passwordProps="password"
							placeholder="Confirme a nova senha"
							returnKeyType="send"
							onSubmitEditing={() =>
								formRef.current?.submitForm()
							}
							clearErrors={handleErros}
						/>
						<View style={styles.viewButton}>
							<Button
								text={Strings.changePassword}
								onPress={(event) =>
									formRef.current?.submitForm(event)
								}
							/>
						</View>
					</Form>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

export default ChangePasswordScreen;
