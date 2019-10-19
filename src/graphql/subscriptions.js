/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGuriviajes = `subscription OnCreateGuriviajes {
  onCreateGuriviajes{
    autos
    email
    image
    name
    viajes
  }
}
`;
export const onDeleteGuriviajes = `subscription OnDeleteGuriviajes(
  $autos: String
  $email: String
  $image: String
  $name: String
  $viajes: AWSJSON
) {
  onDeleteGuriviajes(
    autos: $autos
    email: $email
    image: $image
    name: $name
    viajes: $viajes
  ) {
    autos
    email
    image
    name
    viajes
  }
}
`;
export const onUpdateGuriviajes = `subscription OnUpdateGuriviajes(
  $autos: String
  $email: String
  $image: String
  $name: String
  $viajes: AWSJSON
) {
  onUpdateGuriviajes(
    autos: $autos
    email: $email
    image: $image
    name: $name
    viajes: $viajes
  ) {
    autos
    email
    image
    name
    viajes
  }
}
`;
