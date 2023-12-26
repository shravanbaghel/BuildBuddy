import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import React from 'react';


const Splash = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, margin: 0, padding: 0, justifyContent: 'center', alignItems: 'center' }}>

            <LottieView
                style={{
                    margin: 0,
                    flex: 1,
                    width: '60%',
                }}
                source={require('../assets/SplashScreen/SplashScreen.json')}
                autoPlay
                loop={false}
                onAnimationFinish={() => navigation.dispatch(StackActions.replace('OnboardingScreen1'))} />

            <Text style={{fontSize:20,top:-200,color:'gray'}}>Build Buddy</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})