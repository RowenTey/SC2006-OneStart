import React, { Component } from 'react';

import type {Node} from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TextInput,
  
  } from 'react-native';

  export default class Signup extends Component<{}> {
    render(){
        return(
            <View style = {Styles.container}>
                <Text style = {Styles.text}>JustJio</Text>
                <TextInput style = {Styles.box} placeholder = "Enter your username" placeholderTextColor={"#4E1164"} ></TextInput>
                <TextInput style = {Styles.box} placeholder = "Enter your phone number" placeholderTextColor={"#4E1164"}></TextInput>
                <TextInput style = {Styles.box} placeholder = "Enter your email" placeholderTextColor={"#4E1164"}></TextInput>
                <TextInput style = {Styles.box} placeholder = "Enter password" placeholderTextColor={"#4E1164"} secureTextEntry = {true}></TextInput>
                <TextInput style = {Styles.box} placeholder = "Confirm password" placeholderTextColor={"#4E1164"} secureTextEntry = {true} ></TextInput>
                <TouchableOpacity >
                <Text style = {Styles.confirmationbox} >Register</Text>
                </TouchableOpacity>
                <View style = {Styles.smalltext}>
                <Text style = {Styles.smalltext}>Already have an account?</Text>
                <Text style = {Styles.signin}> Sign in</Text>

                </View>
               

                
            </View>
        )
    }
  }



  
const Styles = StyleSheet.create({
    header: {
      width : '100%' ,
      height : '15%',
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#E9D7FD'
  
    },
  
    head : {
      backgroundColor : '#E9D7FD',
    },
  
    container : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#E9D7FD'
    },
  
    text: {
      fontSize : 56,
      top : -40,
      fontFamily : "OleoScript-Bold",
      color : "#4E1164",
      
    },

    smalltext : {
      fontSize : 13,
      color : "#4E1164",
      flexDirection : 'row',
    },

    box : {
        width : 300,
        backgroundColor : "white",
        marginVertical : 10,
        color : '#6C6C6B',
        fontSize : 13,
        paddingHorizontal : 16,
       
    },

    confirmationbox : {
        borderRadius : 25,
        width : 300,
        height :40,
        paddingVertical : 10,
        backgroundColor : "#4E1164",
        marginVertical : 10,
        color : 'white',
        fontWeight : 'bold',
        fontSize : 13,
        alignItems : 'center',
        textAlign : 'center',
        marginVertical : 20,
    },

    signin : {
      color : '#4E1164',
      fontsize : 16,
      fontweight : '500',
      
    }

  });


  
  