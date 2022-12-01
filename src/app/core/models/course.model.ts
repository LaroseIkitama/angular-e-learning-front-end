import { Category } from "./category.model";

export class Course {
  id!: number;
  title!: string;
  description!: string;
  image!: string;
  video!: string;
  duration!: string;
  level!: string;
  status!: number;
  userId!: number;
  categoryId!: number;
}
