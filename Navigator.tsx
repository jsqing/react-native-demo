import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import TabBarIcon from './src/components/TabBarIcon'

import Home from './src/pages/main/Home'
import Pledge from './src/pages/main/Pledge'

const Main = createBottomTabNavigator (
    {
			Home,
			Pledge,
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
          const { routeName } = navigation.state
          return {
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} routeName={routeName} />,
          }
        },
      tabBarOptions: {
        activeTintColor: '#F08800',
        inactiveTintColor: '#888FA1',
        style: {
          borderTopColor: '#E6E8EB',
        },
      }
    }
)

export default createAppContainer(createStackNavigator(
    {
      Main: {
				screen: Main,
				navigationOptions: {
					header: null
				}
			}
		},
		{
			defaultNavigationOptions: {
				headerBackTitle: '返回'
			}
		}
))