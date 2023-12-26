import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, StackActions } from '@react-navigation/native';

const OnboardingScreen1 = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image
                    style={styles.shape1}
                    source={require('../assets/OnboardingImages/screen3/Shape3.png')}
                />

                <Image
                    style={styles.cartIcon}
                    source={require('../assets/OnboardingImages/screen3/icon.png')}
                />
                <Text style={{ fontSize: 26, fontWeight: 500, position: 'absolute', color: '#fff', left: "52%", top: '45%' }}>Receive Order</Text>
                <Text style={{ fontSize: 15, fontWeight: 400, position: 'absolute', color: '#fff', left: "42%", top: '60%', }}>Get your Ready-Made Clothing</Text>
                <Text style={{ fontSize: 15, fontWeight: 400, position: 'absolute', color: '#fff', left: "70%", top: '67%', }}>in just 7 days</Text>



            </View>
            <View style={{ alignItems: 'center'}}>
                <Image style={{ height: 250, width: 180, resizeMode: 'contain' }}
                 source={require('../assets/OnboardingImages/screen3/getYourOrder.png')} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 500, }}>Get Your order !!</Text>
                <Text style={{ textAlign: 'center', paddingHorizontal: 10,top:4 }}>
                    If You're Looking for a custom tailored outfit with your priority of fabrics,
                    It will be delivered to you within 7 days</Text>

                <TouchableOpacity 
                onPress={()=> navigation.dispatch(StackActions.replace('SignUp'))}
                style={{ width: 60, backgroundColor: '#DB3022', height: 60, borderRadius: 30, top: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="right" size={25} color="white" />
                </TouchableOpacity>

            </View>





        </SafeAreaView>
    )
}

export default OnboardingScreen1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
    },
    shape1: {
        width: 410,
        height: 250,
        resizeMode: 'stretch'
    },
    shape2: {
        position: 'absolute',
        width: 120,
        height: 130,
        resizeMode: 'stretch',
    },
    cartIcon: {
        position: 'absolute',
        width: 65,
        height: 50,
        left: '75%',
        top: '20%'
    },
    skipBtnContainer: {
        position: 'absolute', left: '85%', top: '10%'
    }
})