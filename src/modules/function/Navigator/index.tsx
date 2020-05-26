export const getPosition = () => {
  return new Promise((resolve, error) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        resolve(coords);
      },
      (error) => {
        resolve(0);
      }
    );
  });
};
