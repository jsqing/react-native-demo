import React from 'react'
import { StyleSheet, View } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Zocial from 'react-native-vector-icons/Zocial'

const styles = StyleSheet.create({
    image: {
        height: 24
		},
		foucused: {
			color: '#f08800',
		},
		no_foucused: {
			color: '#999999'
		}
})

export default ({ routeName, focused }) => {
    const images = {
        Home: focused ? <FontAwesome name="database" size={20} style={styles.foucused} /> : <FontAwesome name="database" size={20} style={styles.no_foucused} />,
				Pledge:focused ? <Zocial name="bitcoin" size={20} style={styles.foucused} /> : <Zocial name="bitcoin" size={20} style={styles.no_foucused} />
		};
		return (
			<View>
				{images[routeName]}
			</View>
		)
}
