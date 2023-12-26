import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen1 from './screens/OnboardingScreen1';
import OnboardingScreen2 from './screens/OnboardingScreen2';
import OnboardingScreen3 from './screens/OnboardingScreen3';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import LoginSplashScreen from './screens/LoginSplashScreen';
import EmailVerification from './screens/EmailVerification';
import Splash from './src/Splash';


const Stack = createNativeStackNavigator();
const App = () => {

  return (
    
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Splashscreen" component={Splash} options={{
            title:"Splashscreen",
            headerShown: false
          }}/>
      <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} options={{
            title:"OnboardingScreen1",
            headerShown: false
          }}/>
          <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} options={{
            title:"OnboardingScreen2",
            headerShown: false
          }}/>
           <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} options={{
            title:"OnboardingScreen3",
            headerShown: false
          }}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{
            title:"SignUp",
            headerShown: false
          }}/>
           <Stack.Screen name="Login" component={Login} options={{
            title:"Login",
            headerShown: false
          }}/>
          <Stack.Screen name="EmailVerification" component={EmailVerification} options={{
            title:"EmailVerification",
            headerShown: false
          }}/>
          <Stack.Screen name="LoginSplashScreen" component={LoginSplashScreen} options={{
            title:"LoginSplashScreen",
            headerShown: false
          }}/>
          
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})