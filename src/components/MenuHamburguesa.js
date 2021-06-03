/*
---- importes utilizados ----
*/
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from '../TabNavigator'
import DrawerContent from '../components/Drawer/DrawerContent'
import ModoPremium from '../pages/ModoPremium'
import CalculaMasa from '../pages/CalcularMasa'
import CrearRutina from '../pages/CrearRutina'
import BuscarUsuario from '../pages/BuscarUsuario'
import { NavigationContainer } from '@react-navigation/native'

//instanciacion de menu tipo hamburguesa
const Drawer = createDrawerNavigator()

/*
---- renderizado de menu ----
*/
const MenuHamburguesa = () => (
	<NavigationContainer independent={true}>
		<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
			<Drawer.Screen name='Principal' component={TabNavigator}></Drawer.Screen>
			<Drawer.Screen name='ModoPremium' component={ModoPremium}></Drawer.Screen>
			<Drawer.Screen name='CalculaMasa' component={CalculaMasa}></Drawer.Screen>
			<Drawer.Screen name='CrearRutina' component={CrearRutina}></Drawer.Screen>
			<Drawer.Screen name='BuscarUsuario' component={BuscarUsuario}></Drawer.Screen>
		</Drawer.Navigator>
	</NavigationContainer>
)

export default MenuHamburguesa
