import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-swiper";
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class App extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Swiper
            index={0}
          >
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Screen1" component={Screen1} />
              </Stack.Navigator>
            </NavigationContainer>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Screen2" component={Screen2} />
              </Stack.Navigator>
            </NavigationContainer>
          </Swiper>
        </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)"
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)"
  },

});