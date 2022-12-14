import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { Chapter } from 'src/app/core/models/chapter.model';
import { Course } from 'src/app/core/models/course.model';
import { Section } from 'src/app/core/models/section.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { SectionsService } from 'src/app/core/services/sections.service';

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
  constructor(private coursesService: CoursesService,
    private sectionsService: SectionsService,
    private router: Router) {
    this.coursesService.getCourses().subscribe(course => {
      this.courses = course;
    });
  }

  ngOnInit(): void {

  }
  save() {

    // /* course parameters */
    this.newCourse.id = this.form.value.information.id;
    this.newCourse.title = this.form.value.information.title;
    this.newCourse.description = this.form.value.information.description;
    this.newCourse.image = this.form.value.media.image;
    this.newCourse.video = this.form.value.media.video;
    this.newCourse.duration = this.form.value.information.duration;
    this.newCourse.level = this.form.value.information.level;
    this.newCourse.status = this.form.value.information.status;
    this.newCourse.user = this.form.value.information.user;
    this.newCourse.category = this.form.value.information.category;
    // this.newCourse.userId = this.form.value.information.userId;

    console.log("SAUVEGARDE DU COURS SANS PUBLIER");
    console.log(this.newCourse);

    /* Create course */
    // this.coursesService.createCourse(this.newCourse).subscribe(()=>{
    // });

    for (let index = 0; index < this.form.value.content.length; index++) {
      console.log(`ELEMENT ${index} DE BOUCLE DE CONTENT`);
      // console.log('SECTION NUMERO [', index + 1, ']');
      // console.log("Id : ", this.form.value.content[index].section.id);
      // console.log("Title : ", this.form.value.content[index].section.title);
      // console.log('CAHPITRE NUMERO[', index + 1, ']');
      // for (const element of this.form.value.content[index].chapters) {
      //   console.log("Id : ", element.id);
      //   console.log("Title : ", element.title);
      //   console.log("Contenu : ", element.contentText);
      // }
      /* Parameters of section */


      /* Parcourir les cours */
      console.log(this.courses);
      if (this.courses.length != 0) {
        for (const element of this.courses) {

          if ((element.user === this.newCourse.user) && (element.title === this.newCourse.title)) {
            console.log("Je creer la section suivante");
            console.table(this.newSection);
          }
        }
      } else {
        console.log("AUCUN COURS DANS LA BASE DE DONNEES JE FAIS MA PREMIERE SAUVEGARDE");
        console.log("COURS ");
        console.table(this.newCourse);
        // this.coursesService.createCourse(this.newCourse).subscribe(() => { });
        this.newSection.id = this.form.value.content[index].section.id;
        this.newSection.title = this.form.value.content[index].section.title;
        this.coursesService.getCourse(1).subscribe(course => {
          if (course) {
            let element = new Course();
            element.id = course.id;
            element.title = course.title;
            element.image = course.image;
            element.video = course.video;
            element.duration = course.duration;
            element.level = course.level;
            element.status = course.status;
            element.user = course.user;
            element.category = course.category;

            this.newSection.course = element;
          }
          console.log("Section mapping");
          console.table(this.newSection.course);
        });
        this.sectionsService.createSection(this.newSection).subscribe(() => { });
        console.log("SECTION CREATE");
        console.table(this.newSection);
        break
      }

    }

    //this.router.navigate(['/course-list']);
  }

  submit() {
    console.log('submit');

    this.formSubmitted = true;

    /* course parameters */
    this.newCourse.id = this.form.value.information.id;
    this.newCourse.title = this.form.value.information.title;
    this.newCourse.description = this.form.value.information.description;
    this.newCourse.image = this.form.value.media.image;
    this.newCourse.video = this.form.value.media.video;
    this.newCourse.duration = this.form.value.information.duration;
    this.newCourse.level = this.form.value.information.level;
    this.newCourse.status = 1;
    this.newCourse.user = this.form.value.information.user;
    this.newCourse.category = this.form.value.information.category;
    // this.newCourse.userId = this.form.value.information.userId;

    //console.log('information to create a new Course');
    console.log(this.newCourse);
    /* Create course */
    this.coursesService.createCourse(this.newCourse).subscribe();



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

        if ((element.user === this.newCourse.id) && (element.title === this.newCourse.title)) {
          console.log("le cours attribuer a cette section sera [ ", element.title, " ]");
        }
      }

    }

    this.router.navigate(['/course-list']);


  }
}
