import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/core/models/chapter.model';
import { ChapterValidated } from 'src/app/core/models/chapterValidated.model';
import { Course } from 'src/app/core/models/course.model';
import { Section } from 'src/app/core/models/section.model';
import { ChaptersServices } from 'src/app/core/services/chapters.services';
import { chaptersValidatedService } from 'src/app/core/services/chaptersValidated.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { SectionsService } from 'src/app/core/services/sections.service';

@Component({
  selector: 'app-take-course',
  templateUrl: './take-course.component.html',
  styleUrls: ['./take-course.component.scss']
})
export class TakeCourseComponent implements OnInit {
  panelOpenState = false;
  // course = new Course();
  course: Course | undefined;
  sections!: Section[];
  chapters!: Chapter[];

  chaptersValidatedTable!: ChapterValidated[];

  totalChaptersLength!: number;
  totalChaptersValidatedLength!: number;

  totalChaptersValidated = 0;
  percentage!: number;

  constructor(private activateRoute: ActivatedRoute,
    private sectionsService: SectionsService,
    private chaptersService: ChaptersServices,
    private coursesService: CoursesService,
    private chaptersValidatedService: chaptersValidatedService) { }

  ngOnInit(): void {
    const courseId: string | null = this.activateRoute.snapshot.paramMap.get('id');
    if (courseId) {
      this.coursesService.getCourse(+courseId).subscribe((course) => {
        this.course = course;
      });
    }
    // this.coursesService.getCourse(this.activateRoute.snapshot.params['id']).subscribe(course => {
    //   this.course = course;
    // });

    /* All sections */
    this.sectionsService.getSections().subscribe(sections => {
      this.sections = sections;
    });
    /* All chapters */
    this.chaptersService.getChapters().subscribe(chapters => {
      this.chapters = chapters;
      this.totalChaptersLength = Object.keys(this.chapters).length;
    });

    /* All Validated chapters */
    this.chaptersValidatedService.getChaptersValidated().subscribe(chaptersValidated => {
      this.chaptersValidatedTable = chaptersValidated;

      this.totalChaptersValidatedLength = Object.keys(this.chaptersValidatedTable).length;

      /* Loop on table chapter_leaner length*/
      for (let i = 0; i < this.totalChaptersValidatedLength; i++) {
        /* Loop on chapters table length*/
        for (let j = 0; j < this.totalChaptersLength; j++) {

          if ((this.chapters[j].id == this.chaptersValidatedTable[i].chapterId) && (this.chaptersValidatedTable[i].userId == 2)) {
            this.totalChaptersValidated = this.totalChaptersValidated + 1;
            console.log('=====?Chapter valider correspond?====');
            console.log(this.totalChaptersValidated);
          }
        }
      }

      this.percentage = (this.totalChaptersValidated / this.totalChaptersLength) * 100;
      console.log('pourcentage = ');
      console.log(this.percentage);
    });

  }

}
