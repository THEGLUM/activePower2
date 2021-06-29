/*
---- importes utilizados ----
*/
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
import ListaInfo from './ListaInfo'

/*
---- vista de informacion de la rutina
*/
const InfoRutina = ({ navigation, route }) => {
	// useEffect(() => {
	// 	console.log(route.params)
	// })
	const { des, img, name,ejs } = route.params.data
	console.log('-----------------------------')
	console.log(ejs)
	console.log('-----------------------------')
	return (
		<View style={{ backgroundColor: '#fff' }}>
			<Text style={styles.title}>{name}</Text>
			<ScrollView>
				<ListaInfo data={datas} navigation={navigation} />
			</ScrollView>
		</View>
	)
}

//datos de prueba para mostrar rutinas
const datas = [
	{
		id: 1,
		img: 'https://media.istockphoto.com/photos/african-american-man-doing-push-up-picture-id154370462',
		nombre: 'Flexión',
		des: 'reps			series\n5		X		7',
		exp: 'Toma aire profundamente y contrae al mismo tiempo la espalda, los glúteos y los omóplatos fijos.',
		exp2: 'Para un agarre correcto en el press de banca, sujeta la barra a la altura de los hombros Las muñecas se mantienen rectas y las manos tienen que rodear la barra para un agarre firme.',
	},
	{
		img: 'https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2019/01/1140-group-exercise-streching-esp.jpg',
		nombre: 'loco',
		des: 'reps			series\n5		X		7',
		id: 2,
		exp: 'Toma aire profundamente y contrae al mismo tiempo la espalda, los glúteos y los omóplatos fijos.',
		exp2: 'Para un agarre correcto en el press de banca, sujeta la barra a la altura de los hombros Las muñecas se mantienen rectas y las manos tienen que rodear la barra para un agarre firme.',
	},
	{
		id: 3,
		img: 'https://media.istockphoto.com/photos/african-american-man-doing-push-up-picture-id154370462',
		nombre: 'Flexión',
		des: 'reps			series\n5		X		7',
		exp: 'Toma aire profundamente y contrae al mismo tiempo la espalda, los glúteos y los omóplatos fijos.',
		exp2: 'Para un agarre correcto en el press de banca, sujeta la barra a la altura de los hombros Las muñecas se mantienen rectas y las manos tienen que rodear la barra para un agarre firme.',
	},
	{
		img: 'https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2019/01/1140-group-exercise-streching-esp.jpg',
		nombre: 'sentadilla',
		des: 'reps			series\n5		X		7',
		id: 4,
		exp: 'Toma aire profundamente y contrae al mismo tiempo la espalda, los glúteos y los omóplatos fijos.',
		exp2: 'Para un agarre correcto en el press de banca, sujeta la barra a la altura de los hombros Las muñecas se mantienen rectas y las manos tienen que rodear la barra para un agarre firme.',
	},
]

//estilos de la vista
const styles = StyleSheet.create({
	img: {
		width: 200,
		height: 200,
		marginLeft: 50,
	},
	title: {
		marginTop: 20,
		marginBottom: 20,
		textAlign: 'center',
		color: Colors.black,
		fontSize: 20,
		fontWeight: 'bold',
	},
})

export default InfoRutina
