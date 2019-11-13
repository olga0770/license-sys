export default interface IUser {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;



  // _id: string;
  // testId: string;
  // name: string;
  // password: string;



  // _id: string;
  // customerId?: string;
  // name: string;
  // image?: string;
  // description?: string;
  // location?: string;
  // endDate?: Date;
  // dateCreated?: Date;
  // user?: IProduct;
  // startingPrice?: number;
  // bids?: IBid[];

  // name: string;
  // _links: Self;
}

// export interface Self {
//   self: Href;
//   customer: Href;
// }
//
// export interface Href {
//   href: string;
// }


// "customers": [
//   {
//     "name": "xxx",
//     "_links": {
//       "self": {
//         "href": "http://localhost:8080/customers/1"
//       },
//       "customer": {
//         "href": "http://localhost:8080/customers/1"
//       }
//     }
//   }





// export interface IProduct {
//   _id: string;
//   username: string;
//   profileImage: string;
//   firstname: string;
//   lastname: string;
//   email: string;
//   password: string;
//   phone: string;
//   birthDate: Date;
//   isAdmin: boolean;
// }
//
// export interface IBid {
//   _id: string;
//   userId: string;
//   productId?: string;
//   amount: number;
//   date: Date;
//
// }










