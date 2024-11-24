import express from 'express';
import { BikeControllers } from './bike.controller';

const router = express.Router();

router.post('/', BikeControllers.createBike);
router.get('/:productId', BikeControllers.getSingleBike);
router.get('/', BikeControllers.getAllBikes);
router.delete('/:productId', BikeControllers.deleteBike);
router.patch('/:productId', BikeControllers.updateBike);

export const BikeRouter = router;
