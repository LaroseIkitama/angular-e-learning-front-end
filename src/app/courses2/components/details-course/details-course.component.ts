import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from 'src/app/core/models/chapter.model';
import { Course } from 'src/app/core/models/course.model';
import { Section } from 'src/app/core/models/section.model';
import { ChaptersServices } from 'src/app/core/services/chapters.services';
import { CoursesService } from 'src/app/core/services/courses.service';
import { SectionsService } from 'src/app/core/services/sections.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.scss']
})
export class DetailsCourseComponent implements OnInit {
  panelOpenState = false;

  course = new Course();
  sections!: Section[];
  chapters!: Chapter[];
  i = 0;
  constructor(private activateRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private sectionsService: SectionsService,
    private chaptersService: ChaptersServices,
    private router: Router) { }

  ngOnInit(): void {
    this.coursesService.getCourse(this.activateRoute.snapshot.params['id']).subscribe(course => {
      this.course = course;

    });
    this.sectionsService.getSections().subscribe(sections => {
      this.sections = sections;
      console.log(this.sections);
    });
    this.chaptersService.getChapters().subscribe(chapters => {
      this.chapters = chapters;
      console.log(this.chapters);
    });
  }

  commentsView(id: number) {
    this.router.navigate([`comments-course/${id}`]);
  }

}
