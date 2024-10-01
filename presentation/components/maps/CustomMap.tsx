import { LatLng } from '@/infrastructure/interfaces/lat-lng';
import { View, Text, ViewProps, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

interface Props extends ViewProps {
  initialLocation: LatLng;
  showUserLocation?: boolean;
}

const CustomMap = ({
  initialLocation,
  showUserLocation = true,
  ...rest
}: Props) => {
  return (
    <View {...rest}>
      <MapView
        // showsPointsOfInterest={false}
        showsUserLocation={showUserLocation}
        style={styles.map}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
export default CustomMap;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
  },
});
