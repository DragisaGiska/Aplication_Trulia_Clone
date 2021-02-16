import   {gql, ApolloServer} from "apollo-server-micro";
import { resolveHref } from "next/dist/next-server/lib/router/router";
const { GraphQLScalarType, Kind } = require('graphql');
import Cors from 'micro-cors';

const cors = Cors();

const db = require('../../database.js');

const typeDefs = gql`
  scalar Date
  type Query {
    getLocation(order: String, by:String ,limit:Int,offset:Int): [Location]
    getLocationByName(address: String,order: String, by:String ,limit:Int,offset:Int): [Location]
    getPropertiesByID(id: ID): [Location]
    searchBox(address: String!,limit:Int!,offset:Int!,beds:Int,min_price:Int,max_price:Int,typeHouse:[String],order: String, by:String): [Location]
  }
type Location{
    id:ID
    address: String
    lat:Float
    log: Float
    skip:Int
    first:Int
    properties: [Properties]
}
type Properties{
    id:ID
    price: Int
    number_of_bedrooms: Int
    number_of_bathrooms: Int
    heating: String
    sqft: Int
    washer:Boolean
    fireplace:Boolean
    exterior:Boolean
    parking:Boolean
    lot_size:Int
    stories:Int
    dryer:Boolean
    air_conditioning:Boolean
    patio:Boolean
    cooling_system:String
    description:String
    is_actiove:Boolean
    created_at:Date
    update_at:Date
    number_of_rooms:Int
    saved_house:Boolean
    elevator:Boolean
    year_build:Int
    pool:Boolean
    property_type:String
    assigned_parking_space:Int
    garden:Boolean
    floors:String
    location_id: Int
}
`;

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  
  parseValue(created_at) {
    return new Date(created_at); // Convert incoming integer to Date
  },
  parseValue(update_at) {
    return new Date(update_at); // Convert incoming integer to Date
  },
});


const resolvers = {
  Date: dateScalar,
    Query: {
      getLocation: async (_parent,_args, _context)=>{
        return await db.many(`SELECT location.id,location.lat,location.log,properties.location_id,
        fullname_loc(properties.location_id) as address from public.location 
        inner join public.properties on location.id = properties.location_id`);


      },
      getLocationByName: async (_parent, _args, _context) =>{
         return await db.many(`SELECT location.id,location.lat,location.log,properties.location_id,
         fullname_loc(properties.location_id) as address from public.location 
         inner join public.properties on location.id = properties.location_id 
         where fullname_loc(properties.location_id) ~ '${_args.address}' and price BETWEEN'${_args.min_price}' AND '${_args.max_price}' 
          ORDER BY
         ${_args.order} ${_args.by} offset '${_args.offset}' limit '${_args.limit}'`);


               },

    searchBox: async (_parent, _args, _context) =>{
           let glavniUpit = `SELECT location.id,location.lat,location.log,properties.location_id,
           fullname_loc(properties.location_id) as address from public.location 
           inner join public.properties on location.id = properties.location_id
           where fullname_loc(properties.location_id) ~ '${_args.address}'`;

          if (_args.beds) {

            glavniUpit+= `and number_of_bedrooms > ${_args.beds}`;

          }
          if (_args.typeHouse) {
            
             for(let i=0; i<7; i++) 
             {
              
                if(i==0)
                {
                glavniUpit+= `  and (property_type ~ '${_args.typeHouse[i]}'  `;
                }
                if(i>0 && (_args.typeHouse[i])) 
                {
                  glavniUpit+= `  or property_type ~ '${_args.typeHouse[i]}'  `;
                }
            }
          }

          if (_args.min_price) {

            glavniUpit+= `) and price > '${_args.min_price}'  `;

          }
          if (_args.max_price) {

            glavniUpit+= `and price < '${_args.max_price}'  `;

          }

          if (_args.order) {

            glavniUpit+= `ORDER BY ${_args.order} `;

          }
          if (_args.by) {

            glavniUpit+= ` ${_args.by} `;

          }
          
          glavniUpit+= `offset '${_args.offset}' limit '${_args.limit}'`;


          return await db.many(glavniUpit);   
          } ,


    getPropertiesByID: async (_parent, {id} , _context) =>{
                return await db.many(`SELECT location.id, properties.location_id,
            fullname_loc(properties.location_id) as address
            from location 
            inner join properties on location.id=properties.location_id
            where properties.id = $1`, id);
    
               }, 

        
       },

   

     Location:{
            id:(location,_args,_context)=> location.id,
           properties: async (location,_args,_context)=>{
               return await db.many("select * from properties where properties.location_id = '$1'", location.id);
               }
    
     },
     Properties:{
         id:(properties,_args,_context)=> properties.id  
     }
    };

   
    
  
  const apolloServer = new ApolloServer({
    cors: {
      origin: '*',
      credentials: true
    },
    typeDefs,
    resolvers,
    context: () => {
      return {}
    }
  })
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  return apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});






