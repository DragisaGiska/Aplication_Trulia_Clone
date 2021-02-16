export const GRAPHQL_API = "http://localhost:3000/api/graphql"
export const GET_LOCATIONS_QUERY =`
query getLocation{
getLocation
{
  address
  lat
  log
  properties
  {
    price
    number_of_bedrooms
    number_of_bathrooms
    sqft
  }
}
}
`