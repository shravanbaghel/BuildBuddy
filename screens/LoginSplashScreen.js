import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const LoginSplashScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',left:'22%'}}>
      <Image
      style={{}}
      source={require('../assets/LoginSplashScreen/LoginSplashScreen.png')}
      />
    </View>
  )
}

export default LoginSplashScreen

const styles = StyleSheet.create({})