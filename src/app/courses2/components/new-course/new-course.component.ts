import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  courseForm!:FormGroup;
  sectionForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }


}
