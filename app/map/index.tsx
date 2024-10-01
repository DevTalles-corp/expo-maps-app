import CustomMap from '@/presentation/components/maps/CustomMap';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const MapScreen = () => {
  return (
    <View>
      <CustomMap
        initialLocation={{
          latitude: 45.41256,
          longitude: -75.698931,
        }}
      />

      {/* <MapView
        // showsPointsOfInterest={false}
        style={styles.map}
        // 45.412560, -75.698931
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 45.41256,
          longitude: -75.698931,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </View>
  );
};
export default MapScreen;
