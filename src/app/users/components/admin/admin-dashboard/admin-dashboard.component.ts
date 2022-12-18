import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { UsersService } from 'src/app/core/services/usersService';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public totalCourse = 0;
  public totalLearner = 0;
  public totalTrainer = 0;
  constructor(private usersService: UsersService,
    private coursesService: CoursesService
  ) {
    this.usersService.getUsers().subscribe((users) => {
      for (let user of users) {
        if (user.role === "FORMATEUR")
          this.totalTrainer += 1;
        if (user.role === "APPRENANT")
          this.totalLearner += 1;
      }
    });
    this.coursesService.getCourses().subscribe((courses) => {
      for (let course of courses) {
        if (course.status == 1)
          this.totalCourse += 1;
      }
    });
  }

  ngOnInit(): void {
  }

}
