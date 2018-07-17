import { Router } from 'express';

import {
  showAllItems,
  createItem,
  showItem,
  updateItem,
  deleteItem
} from './items.handler';

export const router = Router({ mergeParams: true });

router
  .route('/')
  .get(showAllItems)
  .post(createItem);

router
  .route('/:itemId')
  .get(showItem)
  .put(updateItem)
  .delete(deleteItem);
