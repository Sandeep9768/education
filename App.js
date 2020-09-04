import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { YellowBox} from "react-native";
import MainNavigation from './src/navigation/MainNavigation '
import { store } from './src/redux';

export default class App extends Component {
  render() {
    return (
     <Provider store={store} style={{backgroundColor:'transparent'}}>
      <MainNavigation ></MainNavigation>
    </Provider>
    )
  }
}