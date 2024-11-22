import { Model } from "mongoose";


// export enum BikeCategory {
//     Mountain = "Mountain",
//     Road = "Road",
//     Hybrid = "Hybrid",
//     Electric = "Electric",
//   }

  // "Mountain" | "Road" | "Hybrid" | "Electric"
  
 export type TBike = {
    name: string; 
    brand: string; 
    price: number; 
    category: "Mountain"| "Road"| "Hybrid"|"Electric"; 
    description: string; 
    quantity: number; 
    inStock: boolean; 
  };
  

  export interface BikeModel extends Model<TBike>{
    isBikeExists(id: string):Promise<TBike | null>
  }