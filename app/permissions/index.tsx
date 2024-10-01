import { View, Text, Pressable } from 'react-native';
import { ThemedText } from '@/presentation/components/shared/ThemedText';
import { usePermissionsStore } from '@/presentation/store/usePermissionsStore';
import ThemedPressable from '@/presentation/components/shared/ThemedPressable';

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </ThemedPressable>

      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  );
};
export default PermissionsScreen;
