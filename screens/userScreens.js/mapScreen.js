import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import styles from '../../../../../styling';

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
          <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>Medical Emergency</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.mb1]}>
          <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>Fire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => {
            navigation.navigate('accident');
          }}>
          <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>Accident</Text>
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

// const styles = StyleSheet.create({
//   heading: {
//     fontSize: 30,
//     color: 'black',
//     fontWeight: '700',
//     marginTop: 80,
//   },
//   container: {
//     width: '100%',
//     height: '100%',
//     padding: 20,
//   },
//   text: {
//     fontSize: 18,
//     color: 'gray',
//     fontWeight: '500',
//   },
//   input: {
//     width: '97%',
//     color: 'black',
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginTop: 10,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   inputContainer: {
//     marginTop: 50,
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   touchableOpacity: {
//     width: '100%',
//     backgroundColor: '#a8aada',
//     borderRadius: 10,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
