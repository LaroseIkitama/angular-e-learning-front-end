import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../core/models/category.model';
import { Course } from '../core/models/course.model';
import { Review } from '../core/models/review.model';
import { CategoriesService } from '../core/services/categories.service';
import { CoursesService } from '../core/services/courses.service';
import { ReviewsService } from '../core/services/reviews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses!: Course[];
  categories!: Category[];
  reviews!: Review[];
  courseId = 3;

  constructor(private coursesService: CoursesService,
    private categoriesService: CategoriesService,
    private reviewsService: ReviewsService,
    private router:Router) { }

  ngOnInit(): void {
    this.coursesService.getCoursesPublished().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.courses);
    });
  }

  onDetails(id:number){
    this.router.navigate([`details-course/${id}`]);

  }
}
