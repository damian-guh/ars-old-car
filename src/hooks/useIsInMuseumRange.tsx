import { useEffect, useState } from 'react';
import { LATITUDE, LONGITUDE } from 'utils/constants';

/* global GeolocationPosition */

const distance = (
  lon1: number,
  lat1: number,
  lon2: number | undefined,
  lat2: number | undefined
) => {
  const toRadians = (deg: number) => (deg * Math.PI) / 180;

  if (lat1 && lat1 && lon2 && lat2) {
    const R = 6371; // Radius of the earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  return null;
};

const useIsInMuseumRange = () => {
  const [geo, setGeo] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        setGeo(success);
      },
      () => setGeo(null),
      { enableHighAccuracy: true }
    );
  }, []);

  if (geo) {
    const distanceBetweenUserAndMuseum = distance(
      LONGITUDE,
      LATITUDE,
      geo.coords.longitude,
      geo.coords.latitude
    );

    if (distanceBetweenUserAndMuseum !== null) {
      return distanceBetweenUserAndMuseum <= 1;
    }

    return false;
  }

  return null;
};

export default useIsInMuseumRange;
