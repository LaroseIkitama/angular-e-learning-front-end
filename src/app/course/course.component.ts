import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  id!: number;
  title!: string;
  description!: string;
  image!: string;
  video!: string;
  duration!: string;
  level!: string;
  status!: number;
  createdDate!: Date;

  constructor() { }

  ngOnInit(): void {
    this.id = 1;
    this.title = "Learn API REST";
    this.description = "Learn to create REST API with Spring Boot";
    this.image = "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg";
    this.video = "https://www.youtube.com/watch?v=99mxjnzR3Tc";
    this.duration = "1";
    this.level = "MEDIUM";
    this.status = 0;
   this.createdDate= new Date();
  }

}
