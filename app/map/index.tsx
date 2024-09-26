import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        // showsPointsOfInterest={false}
        style={styles.map}
        // 45.412560, -75.698931
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 45.41256,
          longitude: -75.698931,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
  },
});
