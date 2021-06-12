import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import ClothesScreen from './screens/ClothesScreen'
import SelectScreen from './screens/SelectScreen'
import SelectScreen2 from './screens/SelectScreen2';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ClothesScreen:{screen:ClothesScreen},
  SelectScreen:{screen:SelectScreen},
  SelectScreen2:{screen:SelectScreen2}

})

const AppContainer =  createAppContainer(switchNavigator);