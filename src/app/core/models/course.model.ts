import { Category } from "./category.model";
import { User } from "./user.model";

export class Course {
  id!: number;
  title!: string;
  description!: string;
  image!: string;
  video!: string;
  duration!: string;
  level!: string;
  status!: number;
  user!:User;
  category!: Category;
}
