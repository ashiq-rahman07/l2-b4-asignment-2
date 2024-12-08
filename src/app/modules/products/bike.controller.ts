import { Request, Response } from 'express';
import { BikeServices } from './bike.service';
import bikeValidationSchema from './bike.validation';

const createBike = async (req: Request, res: Response) => {
  try {
    const bikeData = req.body;

    const zodBikeData = bikeValidationSchema.parse(bikeData);
    const result = await BikeServices.createBikeIntoDB(zodBikeData);

    res.status(200).json({
      message: 'Bike is created succesfully',
      status: true,
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

const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await BikeServices.getAllBikesFromDB();

    res.status(200).json({
      message: 'Bikes are retrieved succesfully',
      status: true,

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

const getSingleBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await BikeServices.getSingleBike(productId);

    res.status(200).json({
      message: 'Bike are retrieved succesfully',
      status: true,
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
    const { productId } = req.params;

    await BikeServices.deleteBikeFromDB(productId);

    res.status(200).json({
      message: 'Bike are delete succesfully',
      status: true,

      data: {},
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
const updateBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateBikeData = req.body;

    const result = await BikeServices.updateBikeFromDB(
      productId,
      updateBikeData,
    );

    res.status(200).json({
      message: 'Bike are update succesfully',
      status: true,

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

export const BikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
  deleteBike,
  updateBike,
};
