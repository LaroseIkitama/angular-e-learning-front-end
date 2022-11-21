import { Category } from "./category.model";

export class Course {
  id!: number;
  title!: string;
  description!: string;
  image!: string;
  video!: string;
  language!: string;
  level!: string;
  status!: number;
  userId!: number;
  category!: Category;
}
