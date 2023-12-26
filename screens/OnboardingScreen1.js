import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, StackActions } from '@react-navigation/native';

const OnboardingScreen1 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image
                    style={styles.shape1}
                    source={require('../assets/OnboardingImages/screen1/Shape1.png')}
                />
                <Image
                    style={styles.shape2}
                    source={require('../assets/OnboardingImages/screen1/Shape2.png')}
                />
                <TouchableOpacity 
                 onPress={()=> navigation.dispatch(StackActions.replace('SignUp'))}
                style={styles.skipBtnContainer}>
                    <Text style={{ fontSize: 15, color: 'white' }}>Skip</Text>
                </TouchableOpacity>

                <Image
                    style={styles.cartIcon}
                    source={require('../assets/OnboardingImages/screen1/CartIcon.png')}
                />
                <Text style={{ fontSize: 26, position: 'absolute', color: 'white', left: 28, top: '42%' }}>E-Commerce Shop</Text>
                <Text style={{ fontSize: 15, position: 'absolute', color: 'white', left: 29, top: '53%' }}>Buy the latest trendz here</Text>



            </View>
            <View style={{ alignItems: 'center', top: -20 }}>
                <Image style={{ height: 250, width: 180, resizeMode: 'contain' }} source={require('../assets/OnboardingImages/screen1/PurchaseOnline.png')} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', top: -10 }}>
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 500, }}>Purchase Online</Text>
                <Text style={{ textAlign: 'center', paddingHorizontal: 10 }}>Choose from a vast selection of top-tier clothing tailored to your fashion needs.</Text>

                <TouchableOpacity onPress={()=>navigation.navigate('OnboardingScreen2')} style={{ width: 60, backgroundColor: '#DB3022', height: 60, borderRadius: 30, top: 15, alignItems: 'center', justifyContent: 'center' }}>
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
        width: 430,
        height: 280,
        resizeMode: 'stretch'
    },
    shape2: {
        position: 'absolute',
        width: 230,
        height: 175,
        resizeMode: 'stretch',
        left: '50%',
    },
    cartIcon: {
        position: 'absolute',
        width: 65,
        height: 50,
        left: '7%',
        top: '25%'
    },
    skipBtnContainer: {
        position: 'absolute', left: '85%', top: '8%'
    }
})