import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  newSection = new Section();
  newChapter = new Chapter();

  lastId!: number;

  courses!: Course[];
  constructor(private coursesServices: CoursesService,
    private router: Router) {
    this.coursesServices.getCourses().subscribe(course => {
      this.courses = course;
    });
  }

  ngOnInit(): void {

  }
  save() {
    /* course parameters */
    this.newCourse.id = this.lastId;
    this.newCourse.title = this.form.value.information.title;
    this.newCourse.description = this.form.value.information.description;
    this.newCourse.image = this.form.value.media.image;
    this.newCourse.video = this.form.value.media.video;
    this.newCourse.duration = this.form.value.information.duration;
    this.newCourse.status = 0;
    this.newCourse.userId = this.form.value.information.userId;
    this.newCourse.categoryId = this.form.value.information.categoryId;

    /* Create course */
    this.coursesServices.createCourse(this.newCourse).subscribe();

    this.router.navigate(['/course-list']);
  }

  submit() {
    console.log('submit');

    this.formSubmitted = true;

    /* course parameters */
    this.newCourse.id = this.lastId;
    this.newCourse.title = this.form.value.information.title;
    this.newCourse.description = this.form.value.information.description;
    this.newCourse.image = this.form.value.media.image;
    this.newCourse.video = this.form.value.media.video;
    this.newCourse.duration = this.form.value.information.duration;
    this.newCourse.status = 1;
    this.newCourse.userId = this.form.value.information.userId;
    this.newCourse.categoryId = this.form.value.information.categoryId;

    //console.log('information to create a new Course');
    console.log(this.newCourse);
    /* Create course */
    this.coursesServices.createCourse(this.newCourse).subscribe();



    /* Section boucle */
    for (let index = 0; index < this.form.value.content.length; index++) {
      console.log('SECTION NUMERO [', index + 1, ']');
      console.log("Id : ", this.form.value.content[index].section.id);
      console.log("Title : ", this.form.value.content[index].section.title);
      console.log('CAHPITRE NUMERO[', index + 1, ']');
      for (const element of this.form.value.content[index].chapters) {
        console.log("Id : ", element.id);
        console.log("Title : ", element.title);
        console.log("Contenu : ", element.contentText);
      }
      /* Parameters of section */
      this.newSection.id = this.form.value.content[index].section.id;
      this.newSection.title = this.form.value.content[index].section.title;

      /* Parcourir les cours */
      console.log(this.courses);
      for (const element of this.courses) {

        if ((element.userId === this.newCourse.id) && (element.title === this.newCourse.title)) {
          console.log("le cours attribuer a cette section sera [ ", element.title, " ]");
        }
      }

    }

    this.router.navigate(['/course-list']);


  }
}
