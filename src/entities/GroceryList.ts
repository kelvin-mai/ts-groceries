import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Item } from './Item';

@Entity('groceries')
export class GroceryList extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({
    type: 'text',
    unique: true
  })
  name: string;

  @CreateDateColumn({
    type: 'timestamp'
  })
  created: string;

  @OneToMany(type => Item, item => item.grocery_list)
  @JoinColumn()
  items: Item[];
}
