import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DocumentDirectoryPath } from 'react-native-fs';



export default class Screen2 extends Component {

  readFile = async () => {
    try {
      var RNFS = require ('react-native-fs');
      var MyPath = RNFS.DocumentDirectoryPath;
      const path =MyPath+ "/czasy.txt";
      const contents = await RNFS.readFile(path, "ascii");
      console.log(contents)
      return (""+contents)
    } catch (e) {
      alert("" + e);
    }
  };
  
  render() {
    const result= this.readFile();
    return (
      <View style={styles.MainContainer}>
      <Text>{JSON.stringify(result)}</Text>
      </View>
    );
  }
}







const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});