import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation,StackActions } from '@react-navigation/native';

const OnboardingScreen1 = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image
                    style={styles.shape1}
                    source={require('../assets/OnboardingImages/screen2/Shape2.png')}
                />
                <Image
                    style={styles.shape2}
                    source={require('../assets/OnboardingImages/screen2/subShape2.png')}
                />
                <TouchableOpacity
                onPress={()=> navigation.dispatch(StackActions.replace('SignUp'))}
                style={styles.skipBtnContainer}>
                    
                    <Text style={{ fontSize: 15, color: 'white' }}>Skip</Text>
                </TouchableOpacity>

                <Image
                    style={styles.cartIcon}
                    source={require('../assets/OnboardingImages/screen2/icon.png')}
                />
                <Text style={{ fontSize: 26, fontWeight: 500, position: 'absolute', color: '#DB3022', left: 28, top: '90%' }}>Doorstep Delivery</Text>
                <Text style={{ fontSize: 15, fontWeight: 400, position: 'absolute', color: '#DB3022', left: 29, top: '108%' }}>Delivered to you with safety</Text>



            </View>
            <View style={{ alignItems: 'center', top: 50 }}>
                <Image style={{ height: 250, width: 180, resizeMode: 'contain' }} source={require('../assets/OnboardingImages/screen2/trackOrder.png')} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', top: 50 }}>
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 500, }}>Track Order !!</Text>
                <Text style={{ textAlign: 'center', paddingHorizontal: 10, top: 5 }}>Finalize your dream outfit with a simple tap. Our experts will swiftly assemble your chosen outfits, ensuring an amazing attire that suits your requirements.</Text>

                <TouchableOpacity onPress={()=>navigation.navigate('OnboardingScreen3')} style={{ width: 60, backgroundColor: '#DB3022', height: 60, borderRadius: 30, top: 20, alignItems: 'center', justifyContent: 'center' }}>
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
        width: 420,
        height: 200,
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
        left: '10%',
        top: '60%'
    },
    skipBtnContainer: {
        position: 'absolute', left: '85%', top: '10%'
    }
})