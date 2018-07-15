import { Router } from 'express';
import {
  showAllGroceries,
  showOneGroceries,
  createNewGroceries,
  updateGroceries,
  deleteGroceries
} from './groceries.handler';

export const router = Router();

router
  .route('/')
  .get(showAllGroceries)
  .post(createNewGroceries);

router
  .route('/:id')
  .get(showOneGroceries)
  .put(updateGroceries)
  .delete(deleteGroceries);
