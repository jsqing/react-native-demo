import React from 'react'
import { StyleSheet, View, Text, ImageBackground,ScrollView } from 'react-native'

import Header from '../../components/Header'
import { setStatusBar } from '../../components/HOC/StatusBar'

@setStatusBar({
    barStyle: 'light-content',
    translucent: true,
    backgroundColor: 'transparent'
  })

export default class Home extends React.PureComponent {
    static navigationOptions = {
        title: '首页',
    }
    render() {
        return (
            <View style={styles.fill}>
                 <Header title="首页" color="#999999" fullScreen />
                <ScrollView>
                    <ImageBackground style={styles.bg} source={require('../../../assets/imgs/bg.png')}>
                        <Text>这是首页哈哈哈</Text>
                    </ImageBackground>
                    <View style={{height:900,backgroundColor:'#f08800'}}><Text>这是第三爷sdasda页</Text></View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    fill: {
      flex: 1
    },
    bg: {
      height: 234,
    },
    text: {
      fontSize: 20,
      fontWeight: '500',
      color: '#437dff',
      textAlign: 'center'
    },
    buttonWrapper: {
      padding: 19
    }
})