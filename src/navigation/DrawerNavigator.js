/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
	Ionicons,
	FontAwesome,
	MaterialCommunityIcons,
	Feather,
} from '@expo/vector-icons';
import { Image } from 'react-native';

import CustomDrawerContent from './CustomDrawerContent';

import HomeScreen from '../screens/home';
import PublicationsScreen from '../screens/publications';
import TicketScreen from '../screens/ticket';
import BalanceScreen from '../screens/balance';
import ReservesScreen from '../screens/reserves';
import CondominiumScreen from '../screens/condominium';
import ProfileScreen from '../screens/profile';
import ChangePasswordScreen from '../screens/changePassword';
import HelpScreen from '../screens/help';
import TermsScreen from '../screens/terms';
import PolicesScreen from '../screens/polices';
import AboutScreen from '../screens/about';

import { Colors, Images, Metrics } from '../lib/constants';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			drawerPosition="right"
			screenOptions={{
				headerTitle: () => <Image source={Images.logoSmall} />,
				headerTitleAlign: 'center',
				headerTintColor: Colors.secondary,
				drawerLabelStyle: {
					color: Colors.secondary,
					fontSize: 16,
					fontFamily: 'Roboto-Bold',
				},
				drawerItemStyle: {
					padding: 0,
					paddingBottom: 0,
					margin: 0,
					marginBottom: 0,
				},
				drawerStyle: {
					width: Metrics.screenWidth - 70,
				},
				drawerActiveBackgroundColor: 'transparent',
				drawerInactiveBackgroundColor: 'transparent',
			}}
			drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: 'Home',
					drawerIcon: ({ focused, size }) => (
						<Ionicons
							name="md-home"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Publications"
				component={PublicationsScreen}
				options={{
					title: 'Publicações',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="tooltip-text-outline"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Ticket"
				component={TicketScreen}
				options={{
					title: 'Boletos',
					drawerIcon: ({ focused, size }) => (
						<FontAwesome
							name="barcode"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Balance"
				component={BalanceScreen}
				options={{
					title: 'Balancetes',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="file-table-outline"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Reserves"
				component={ReservesScreen}
				options={{
					title: 'Reservas',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="calendar-month-outline"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Condominium"
				component={CondominiumScreen}
				options={{
					title: 'Troca de Condomínio',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="office-building"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					title: 'Minha conta',
					drawerIcon: ({ focused, size }) => (
						<Feather
							name="user"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="ChangePassword"
				component={ChangePasswordScreen}
				options={{
					title: 'Trocar Senha',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="key-outline"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Help"
				component={HelpScreen}
				options={{
					title: 'Ajuda',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="help-circle-outline"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Terms"
				component={TermsScreen}
				options={{
					title: 'Termos de Uso',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="file-document-outline"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Polices"
				component={PolicesScreen}
				options={{
					title: 'Políticas de Privacidade',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="file-document-outline"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="About"
				component={AboutScreen}
				options={{
					title: 'Sobre',
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons
							name="information-outline"
							size={size}
							color={focused ? Colors.primary : Colors.secondary}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
export default MainDrawerNavigator;