import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Chapter } from 'src/app/core/models/chapter.model';
import { Course } from 'src/app/core/models/course.model';
import { Section } from 'src/app/core/models/section.model';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-publish-form-group',
  templateUrl: './publish-form-group.component.html',
  styleUrls: ['./publish-form-group.component.scss']
})
export class PublishFormGroupComponent implements OnInit {

  @Input() form!: FormGroup
  formSubmitted: boolean = false;

  newCourse = new Course();
  newSection!: Section;
  newChapter!: Chapter;

  constructor(private coursesServices:CoursesService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log('submit');

    this.formSubmitted = true;
    this.newCourse.id= this.form.value.information.id;
    this.newCourse.title= this.form.value.information.title;
    this.newCourse.description=this.form.value.information.description;
    this.newCourse.image=this.form.value.media.image;
    this.newCourse.video=this.form.value.media.video;
    this.newCourse.duration=this.form.value.information.duration;
    this.newCourse.status=1;
    this.newCourse.userId=this.form.value.information.userId;
    this.newCourse.categoryId=this.form.value.information.categoryId;

    console.log('information to create a new Course');
    console.log(this.newCourse);
    /* Create course */
    this.coursesServices.createCourse(this.newCourse);
  }
}
