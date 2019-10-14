/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuriviajes = `query GetGuriviajes($email: String!) {
  getGuriviajes(email: $email) {
    autos
    email
    image
    name
    viajes
  }
}
`;
export const listGuriviajes = `query ListGuriviajes(
  $filter: TableGuriviajesFilterInput
  $limit: Int
  $nextToken: String
) {
  listGuriviajes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      autos
      email
      image
      name
      viajes
    }
    nextToken
  }
}
`;
