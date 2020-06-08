import React, { Component } from 'react';
import { StyleSheet, View, Text, Button,TouchableOpacity,TextInput, TouchableOpacityBase} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
export default class Screen2 extends Component {

  state={
    mins:0,
    secs:0,
    eventDate:eventDate = moment.duration().add({minutes:0,seconds:0})
  }
  handleMinutes = (text) =>{
    this.setState({ mins: text})
  }
  handleSeconds = (text) =>{
    this.setState({secs:text})
  }
  setTime = (mins,secs) =>{
    
    console.log(mins)
    console.log(secs)
    var a,b,c
    if(isNaN(secs) || secs ==='' || secs === NaN){
      secs =0;
    }
    else if(isNaN(mins)|| mins ==='' || mins === NaN) {
      mins =0;
    }
    a = parseFloat(mins)
    b = parseFloat(secs)
    c = a*60 + b
    console.log(c)
    this.setState({eventDate : moment.duration().add(c,'seconds')})
  }
  stop =() =>{
   this.setState({eventDate : moment.duration().add({minutes:0,seconds:0})})
   this.state.mins=0
   this.state.secs=0
}
  

  updateTimer=()=>{

  
    const x = setInterval(()=>{
      let { eventDate} = this.state

      if(eventDate <=0){
        clearInterval(x)
        alert('Koniec Czasu!')
      }else {
        eventDate = eventDate.subtract(1,"s")
        const mins = eventDate.minutes()
        const secs = eventDate.seconds()
        
        this.setState({
          mins,
          secs,
          eventDate
        })
      }
    },1000)

  }
 render(){
    return (

      <View style={styles.container}>
            <Text style={styles.titleText}>Minutnik</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "podaj ilość minut"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {this.handleMinutes}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "podaj ilośc sekund"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {this.handleSeconds}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.setTime(this.state.mins,this.state.secs)
               }>
               <Text style = {styles.submitButtonText}> Zatwierdź </Text>
            </TouchableOpacity>
              <Text style={styles.counterText}>{`${this.state.mins} : ${this.state.secs}`}</Text>
              <TouchableOpacity style={styles.startbutton}
                    onPress ={
                      () => this.updateTimer()
                    }><Text style = {styles.startButtonText}> Start </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stopbutton}
                    onPress ={
                      () => this.stop()
                    }><Text style = {styles.startButtonText}> Reset </Text>
              </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
      margin: 10,
      alignContent: 'stretch',
      height: 50,
      color: '#000000',
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      alignItems: "center",
      borderRadius:5,
      borderWidth: 1,
      borderColor: '#fff',
      textAlign: 'center',
      marginLeft:45,
      marginRight:45,
   },
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingTop: 23,
  },
  button:{
    width:  75,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems :'center',
  },
  counterText:{
    fontSize: 80,
    fontWeight: "bold",
    alignItems: "center",
    textAlign:"center",
    color: '#FFFFFF',
    margin:10
  },
  submitButtonText:{
    color: 'white',
    fontSize:20,
 },
 startButtonText:{
  marginLeft:149,
  color: 'white',
  fontSize:20,
},
 submitButton:{
  marginTop:10,
  margin:8,
  marginLeft: 8,
  paddingVertical: 5,
  alignItems:"center",
  textAlign:'center',
  borderRadius:5,
  borderWidth: 1,
  borderColor: '#fff',
  marginLeft:100,
  marginRight:100,
  backgroundColor:"rgb(255,154,0)"
 },
 startbutton:{
  marginTop:10,
  paddingTop:15,
  paddingBottom:10,
  marginLeft:30,
  marginRight:30,
  backgroundColor:'#1B361F',
  borderRadius:5,
  borderWidth: 1,
  borderColor: '#fff',
},
stopbutton:{
  marginTop:10,
  paddingTop:15,
  paddingBottom:10,
  marginLeft:30,
  marginRight:30,
  backgroundColor:'#3C1715',
  borderRadius:5,
  borderWidth: 1,
  borderColor: '#fff',
},
titleText:{
  color:'#FFFFFF',
  textAlign:"center",
  fontSize: 40,
  margin:15
},
});