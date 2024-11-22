import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";


const createBikeIntoDB =async(bikeData:TBike)=>{

  const result = await Bike.create(bikeData)
  return result;
}


const getAllBikesFromDB = async () => {
    const result = await Bike.find();
    return result;
  };
  
  const getSingleBike= async (id: string) => {
    // const result = await Bike.aggregate([{ $match: { id: } }]);
    const result = await Bike.findById(id)
    return result;
  };
  
  const deleteBikeFromDB = async (id: string) => {
    const result = await Bike.findByIdAndDelete(id)
    return result;
  };
  
  const updateBikeFromDB = async (id: string, payload:Partial<TBike>) => {
    const result = await Bike.findByIdAndUpdate(
        {_id:id},
        payload,
        {
            new: true,
          },
    )
    return result;
  };
  

export const BikeServices ={
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBike,
    deleteBikeFromDB,
    updateBikeFromDB
}