import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { setStatusBar } from '../../components/HOC/StatusBar'

@setStatusBar({
    barStyle: 'light-content',
    translucent: true,
    backgroundColor: 'transparent'
})

export default class Pledge extends React.PureComponent {
    static navigationOptions = {
        title: '质押'
    }

    render() {
        return (
            <View>
                <Text>这是质押页面</Text>
            </View>
        )
    }
}