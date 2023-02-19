import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../../../styling';
// import logo from '../../assets/logo.png';

function Splash({ navigation }) {
    return (
        <>
            <View style={[styles.bgPrimary, styles.h100]}>
                <Text style={[styles.fs2, styles.textCenter, styles.p5, styles.textWhite]}>
                    Instant Help
                </Text>
                {/* <View>
                    <Image
                        source={logo}
                        resizeMode="contain"
                        style={{ width: 250, height: 250 }}
                    />
                </View> */}
                <View style={[styles.my5]}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('police');
                        }}
                        style={[styles.btn, styles.mb1]}>
                        <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>Police</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('mapScreen');
                        }}
                        style={[styles.btn, styles.mb1]}>
                        <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>Ambulance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => {
                        //     navigation.navigate('login');
                        // }}
                        style={[styles.btn, styles.mb1]}>
                        <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>Fire Brigade</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
export default Splash;
