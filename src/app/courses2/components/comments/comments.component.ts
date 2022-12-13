import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  // course = new Course();
  /* Ici 22h */
  course:Course|undefined;
  constructor(private coursesService: CoursesService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const courseId:string | null = this.activateRoute.snapshot.paramMap.get('id');
    if(courseId){
      this.coursesService.getCourse(+courseId).subscribe((course)=>{
        this.course=course;
      });
    }
    // this.coursesService.getCourse(this.activateRoute.snapshot.params['id']).subscribe(course => {
    //   this.course = course;
    // });
  }
  backOnDetails(id: number) {
    this.router.navigate([`details-course/${id}`]);
  }

}
