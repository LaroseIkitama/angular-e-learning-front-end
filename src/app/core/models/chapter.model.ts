import { Section } from "./section.model";

export class Chapter {
  id!: number;
  title!: string;
  content!: string;
  section!: Section;
}
