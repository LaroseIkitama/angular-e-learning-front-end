import { Courses2Module } from "src/app/courses2/courses2.module";
import { Course } from "./course.model";

export class Section {
  id!: number;
  title!: string;
  course!: Course;
}
