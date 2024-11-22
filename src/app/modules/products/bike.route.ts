import express from 'express';
import { BikeControllers } from './bike.controller';

const router = express.Router();

router.post('/',BikeControllers.createBike);
router.get('/:bikeId',BikeControllers.getSingleBike)
router.get('/',BikeControllers.getAllBikes)
router.delete('/:bikeId',BikeControllers.deleteBike)
router.patch('/:bikeId',BikeControllers.updateBike)

export const BikeRouter = router;