import { Request, Response } from "express";
import { BikeServices } from "./bike.service";
import bikeValidationSchema from "./bike.validation";


const createBike = async (req: Request, res: Response)=>{
    try {
        const {bike: bikeData} = req.body
        // console.log(bikeData);
        const zodBikeData = bikeValidationSchema.parse(bikeData)
        const result = await BikeServices.createBikeIntoDB(zodBikeData);

        res.status(200).json({
            message: 'Bike is created succesfully',
            status:true,
            data: result,
        })
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        })
    }
}


const getAllBikes = async (req: Request, res: Response)=>{
    try {
        const result = await BikeServices.getAllBikesFromDB();
    
        res.status(200).json({
          success: true,
          message: 'Bikes are retrieved succesfully',
          data: result,
        });
      } catch (err: any) {
        res.status(500).json({
          success: false,
          message: err.message || 'something went wrong',
          error: err,
        });
      }
}

const getSingleBike = async (req: Request, res: Response) => {
    try {
      const {bikeId}  = req.params;
  
      const result = await BikeServices.getSingleBike(bikeId);
  
      res.status(200).json({
        success: true,
        message: 'Bike is retrieved succesfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  };

  const deleteBike = async (req: Request, res: Response) => {
    try {
      const {bikeId}  = req.params;
  
      const result = await BikeServices.deleteBikeFromDB(bikeId);
  
      res.status(200).json({
        success: true,
        message: 'Bike deleted succesfully',
        
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }

  }
  const updateBike = async (req: Request, res: Response) => {
    try {
      const {bikeId}  = req.params;
      const updateBikeData = req.body

  
      const result = await BikeServices.updateBikeFromDB(bikeId,updateBikeData);
  
      res.status(200).json({
        success: true,
        message: 'Bike update succesfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }

  }

export  const BikeControllers ={
    createBike,
    getAllBikes,
    getSingleBike,
    deleteBike,
    updateBike

}