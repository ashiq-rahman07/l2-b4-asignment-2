import express, { NextFunction, Request, Response } from 'express';
import { BikeControllers } from './bike.controller';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

router.post(
  '/create-product',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  BikeControllers.createBike,
);
router.get('/:productId', BikeControllers.getSingleBike);
router.get('/', BikeControllers.getAllBikes);
router.delete('/:productId', BikeControllers.deleteBike);
router.patch('/:productId', BikeControllers.updateBike);

export const BikeRouter = router;
