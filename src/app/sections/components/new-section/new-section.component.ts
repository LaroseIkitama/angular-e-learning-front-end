import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/core/models/course.model';
import { Section } from 'src/app/core/models/section.model';
import { CoursesService } from 'src/app/core/services/courses.service';



@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {


  displayedColumns: string[] = ['Id', 'Title', 'Course'];
  sections: Section[] = [
    /* { id: 1, title: "title", description: "Une description" },
    { id: 2, title: "title 2", description: "Une description 2" } */
  ];
  courses!: Course[];
  section!: Section;
  dataSource = new MatTableDataSource<Section>(this.sections);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  @ViewChild(MatTable)
  table!: MatTable<any>;
  sectionForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private coursesService: CoursesService) {
    this.coursesService.getCourses().
      subscribe(courses => {
        this.courses = courses;
      });
      console.log(this.courses);

  }

  ngOnInit(): void {
    this.sectionForm = this.formBuilder.group({
      id: [null,],
      title: [null, Validators.required],
      courseId: [null, Validators.required]
    });


    /* console.log(this.dataSource[0][0]); */

  }

  addData() {
    this.sections.push(this.sectionForm.value);
    this.table.renderRows();
    this.dataSource = new MatTableDataSource(<any>this.sections);
    this.dataSource.paginator = this.paginator;
    console.log(this.section);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  removeData() {
    this.sections.pop();
    this.table.renderRows();
    this.dataSource = new MatTableDataSource(<any>this.sections);
    this.dataSource.paginator = this.paginator;
    console.log(this.section);

  }
  saveSection() {
    console.log(this.sections);
  }
}
