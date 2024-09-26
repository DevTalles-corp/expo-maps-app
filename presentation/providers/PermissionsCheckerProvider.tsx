import { PropsWithChildren, useEffect } from 'react';
import { usePermissionsStore } from '../store/usePermissions';
import PermissionsScreen from '@/app/permissions';
import { PermissionStatus } from '@/infrastructure/interfaces/location';
import { router } from 'expo-router';

const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionsStore();

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace('/map');
    } else if (locationStatus !== PermissionStatus.CHECKING) {
      router.replace('/permissions');
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  // TODO:
  // Estar pendiente cuando el estado de la aplicación cambie

  return <>{children}</>;
};
export default PermissionsCheckerProvider;
