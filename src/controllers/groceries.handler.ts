import { GroceryList } from '../entities/GroceryList';

export const showAllGroceries = async (req, res, next) => {
  try {
    const groceries: GroceryList[] = await GroceryList.find({
      relations: ['items']
    });
    res.status(200).json(groceries);
  } catch (err) {
    next(err);
  }
};

export const showOneGroceries = async (req, res, next) => {
  try {
    const { id } = req.params;
    const grocery: GroceryList = await GroceryList.findOne({
      where: { id },
      relations: ['items']
    });
    if (!grocery) {
      throw new Error(`Grocery List doesn't exist`);
    }
    res.status(200).json(grocery);
  } catch (err) {
    next(err);
  }
};

export const createNewGroceries = async (req, res, next) => {
  try {
    const grocery: GroceryList = await GroceryList.create(req.body);
    await grocery.save();
    res.status(201).json(grocery);
  } catch (err) {
    next(err);
  }
};

export const updateGroceries = async (req, res, next) => {
  try {
    const { id } = req.params;
    const grocery: GroceryList = await GroceryList.findOne({
      where: { id },
      relations: ['items']
    });
    grocery.name = req.body.name;
    await grocery.save();
    res.status(200).json(grocery);
  } catch (err) {
    next(err);
  }
};

export const deleteGroceries = async (req, res, next) => {
  try {
    const { id } = req.params;
    const grocery: GroceryList = await GroceryList.findOne({
      where: { id },
      relations: ['items']
    });
    await grocery.remove();
    res.status(200).json(grocery);
  } catch (err) {
    next(err);
  }
};
