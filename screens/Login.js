import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ top: 50, left: 15 }}>
        <Text style={{ fontFamily: 'Alata-Regular', color: '#222222', fontSize: 38 }} >Login</Text>
      </View>

      <View style={{ top: 90, marginHorizontal: 20, backgroundColor: 'white' }}>

        <TextInput
          placeholder='Email'
          style={styles.email}
        />

      </View>

      <View style={{ top: 100, marginHorizontal: 20, backgroundColor: 'white' }}>

        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          style={styles.password}
        />

      </View>

      <View style={{ top: '32%', left: '28%', flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontFamily: 'Alata-Regular', fontSize: 15 }} >Don't have an account?  </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
        >
          <Icon name="arrow-right-long" size={25} color="#DB3022" />

        </TouchableOpacity>

      </View>

      <View style={{ top: '25%', alignItems: 'center' }}>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{ fontFamily: 'Alata-Regular', color: '#fff' }}>LOGIN</Text>
        </TouchableOpacity>

      </View>


      <View style={{ top: '33%', alignItems: 'center' }}>
        <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: 'black' }}>Or sign up with social account</Text>
      </View>

      <View style={{ top: '55%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 17, borderRadius: 20, width: 80, height: 60, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ width: 35, height: 35 }}
            source={require('../assets/LoginPng/google.jpg')}
          />

        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 17, borderRadius: 20, width: 80, height: 60, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/LoginPng/facebook.png')}
          />

        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: '#DB3022',
    width: '90%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 35,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
  },
  email: {
    backgroundColor: 'white',
    fontFamily: 'Alata-Regular',
    padding: 18,
    fontSize: 15,
    borderRadius: 5,
    color: 'black'
  },
  password: {
    backgroundColor: 'white',
    fontFamily: 'Alata-Regular',
    padding: 18,
    fontSize: 15,
    borderRadius: 5,
    color: 'black'
  }
})