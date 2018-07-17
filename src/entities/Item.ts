import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from 'typeorm';
import { GroceryList } from './GroceryList';

@Entity('items')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({
    type: 'text'
  })
  name: string;

  @CreateDateColumn({
    type: 'timestamp'
  })
  created: string;

  @ManyToOne(type => GroceryList, groceryList => groceryList.items)
  grocery_list: GroceryList;
}
