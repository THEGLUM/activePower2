/*
---- importes utilizados ----
*/
import React, { memo, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'

const { width, height } = Dimensions.get('screen')

/*
---- renderizado de la lista de la vista Gratis
*/
const Lista = memo(({ navigation, premium, data }) => {
	return (
		<View>
			{data.map(data => {
				return (
					<RenderItem img={data.img} des={data.des} name={data.nombre} key={data.id} />
				)
			})}
		</View>
	)
})

/*
	---- visualizacion de item
*/
const RenderItem = ({ img, name, des }) => {
	return (
		<TouchableOpacity onPress={() => console.log('click')}>
			<View style={styles.card}>
				<Image source={{ uri: img }} style={styles.img} />
				<View>
					<Text style={styles.titleGratis}>{name}</Text>
					<Text style={styles.desGratis}>{des}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
// navigation.navigate('InfoRutina', { data: item })
//estilos de la lista
const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1,
	},
	card: {
		height: height / 10,
		width: width - 20,
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 40,
		position: 'relative',
		elevation: 2,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	img: {
		borderRadius: 25,
	},
	titleGratis: {
		marginTop: 5,
		marginLeft: 150,
		fontWeight: 'bold',
		fontSize: 20,
	},
	desGratis: {
		marginTop: 10,
		width: 150,
		marginLeft: 150,
	},
	titlePremium: {
		marginTop: 5,
		marginLeft: 180,
		fontWeight: 'bold',
		fontSize: 20,
	},
	desPremium: {
		marginTop: 10,
		marginLeft: 130,
	},
	img: {
		position: 'absolute',
		width: 125,
		height: 95,
		marginLeft: 5,
		marginTop: 1,
		borderRadius: 15,
	},
})

export default Lista
