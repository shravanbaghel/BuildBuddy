import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import {React} from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome6';

const EmailVerification = () => {

  const navigation = useNavigation()

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:40}}>Verify your email</Text>
      <Text style={{fontSize:15,textAlign:'center',width:300}}>We have sent you a verification mail.</Text>


      

      <TouchableOpacity
      style={{flexDirection:'row',top:20}}
        onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'black', fontFamily: 'Alata-Regular', fontSize: 15 }} >
      Go back to login screen  </Text>
        <Icon name="arrow-right-long" size={25} color="#DB3022" />
      </TouchableOpacity>
    </View>
  )
}

export default EmailVerification

const styles = StyleSheet.create({})

