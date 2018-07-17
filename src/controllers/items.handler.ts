import { GroceryList } from '../entities/GroceryList';
import { Item } from '../entities/Item';

export const showAllItems = async (req, res, next) => {
  try {
    const { id } = req.params;
    const list = await GroceryList.findOne({
      where: { id },
      relations: ['items']
    });
    res.json(list.items);
  } catch (err) {
    next(err);
  }
};

export const createItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    let item = await Item.create(req.body);
    item = await item.save();

    const list = await GroceryList.findOne({
      where: { id },
      relations: ['items']
    });
    list.items.push(item);
    await list.save();

    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const showItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({ where: { id: itemId } });

    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const updateItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({ where: { id: itemId } });
    item.name = req.body.name;
    item.save();

    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const deleteItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({ where: { id: itemId } });
    await item.remove();

    res.json(item);
  } catch (err) {
    next(err);
  }
};
