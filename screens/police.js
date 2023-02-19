import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import styles from '../../../../styling';

function MapScreen({ navigation }) {
    const [location, setLocation] = React.useState('');

    useEffect(() => {
        Geolocation.getCurrentPosition(info => setLocation(info));
    });

    return (

        <View >
            <View>
                <TouchableOpacity
                    style={[styles.btn, styles.mb1]}>
                    <Text style={[styles.textWhite, styles.fs2, styles.textCenter]}>Fight / Fire</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, styles.mb1]}
                    onPress={() => {
                        navigation.navigate('Robbery');
                    }}>
                    <Text style={[styles.textWhite, styles.fs2, styles.textCenter]}>Robbery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn]}
                    onPress={() => {
                        navigation.navigate('accident');
                    }}>
                    <Text style={[styles.textWhite, styles.fs2, styles.textCenter]}>Harassment</Text>
                </TouchableOpacity>
            </View>
            {location && (
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ width: '100%', height: '100%', }}
                    region={{
                        longitude: location.coords.longitude,
                        latitude: location.coords.latitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            longitude: location.coords.longitude,
                            latitude: location.coords.latitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        title="Hello User"
                        description="Your Current Location"
                    />
                </MapView>
            )}
        </View>

    );
}

export default MapScreen;
