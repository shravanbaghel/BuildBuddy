import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,Alert } from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const navigation = useNavigation();

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSignUp = async ()=> {
    try {
      if(name.length >0 && email.length > 0 && password.length>0){
        const response = await auth().createUserWithEmailAndPassword(email, password)

        const userData = {
          id : response.user.uid,
          name: name,
          email: email

        }
        await firestore().collection('users').doc(response.user.uid).set(userData)
        await auth().currentUser.sendEmailVerification();
        await auth().signOut();

        console.log(response.user)

        navigation.navigate("EmailVerification")
      }
      else{
        Alert.alert("Please enter the deatils first")
      }
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ top: 50, left: 15 }}>
        <Text style={styles.headerText} >Sign Up</Text>
      </View>

      <View style={{ top: 90, marginHorizontal: 20, backgroundColor: 'white' }}>

        <TextInput
          value= {name}
          placeholder='Name'
          onChangeText={value=>setName(value)}
          style={styles.name}
        />

      </View>

      <View style={{ top: 100, marginHorizontal: 20, backgroundColor: 'white' }}>

        <TextInput
        value= {email}
        onChangeText={value=>setEmail(value)}
          placeholder='Email'
          style={styles.email}
        />

      </View>

      <View style={{ top: 110, marginHorizontal: 20, backgroundColor: 'white' }}>

        <TextInput
        value = {password}
        onChangeText={value=>setPassword(value)}
          placeholder='Password'
          secureTextEntry={true}
          style={styles.password}
        />

      </View>

      <View style={{ top: '32%', left: '26%', flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontFamily: 'Alata-Regular', fontSize: 15 }} >
          Already have an account?  </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Icon name="arrow-right-long" size={25} color="#DB3022" />
        </TouchableOpacity>

      </View>

      <View style={{ top: '25%', alignItems: 'center' }}>

        <TouchableOpacity 
        onPress={()=>handleSignUp()}
        style={styles.signUpBtn}
        >
          <Text style={{ fontFamily: 'Alata-Regular', color: '#fff' }}>SIGN UP</Text>
        </TouchableOpacity>

      </View>

      <View style={{ top: '33%', alignItems: 'center' }}>
        <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: 'black' }}>
          Or sign up with social account
        </Text>
      </View>

      <View style={{ top:'55%', alignItems:'center', flexDirection:'row', justifyContent:'center' }}>
        <TouchableOpacity style={styles.googleBtn}>
          <Image
            style={{ width: 35, height: 35 }}
            source={require('../assets/LoginPng/google.jpg')}
          />

        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookBtn}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/LoginPng/facebook.png')}
          />

        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Alata-Regular',
    color: '#222222',
    fontSize: 38
  },
  name: {
    backgroundColor: 'white',
    fontFamily: 'Alata-Regular',
    padding: 18,
    fontSize: 15,
    borderRadius: 5,
    color: 'black'
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
  },
  googleBtn: {
    backgroundColor: 'white',
    padding: 17,
    borderRadius: 20,
    width: 80,
    height: 60,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  facebookBtn: {
    backgroundColor: 'white',
    padding: 17,
    borderRadius: 20,
    width: 80,
    height: 60,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  signUpBtn: {
    backgroundColor: '#DB3022',
    width: '90%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 35,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  }
})