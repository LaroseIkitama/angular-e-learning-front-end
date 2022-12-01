import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/core/models/course.model';
import { Section } from 'src/app/core/models/section.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { SectionsService } from 'src/app/core/services/sections.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {

  courses!: Course[];
  sections!: Section[];
  dataSource!: MatTableDataSource<Section[]>;
  displayedColumn: string[] = ['Title', 'Course', 'Actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sectionsService: SectionsService,
    private coursesService: CoursesService) {
      this.coursesService.getCourses().subscribe(courses => {
        this.courses = courses;
      })
    }

  ngOnInit(): void {

    this.sectionsService.getSections().
      subscribe(
        sections => {
          this.sections = sections;

          this.dataSource = new MatTableDataSource(<any>this.sections);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
    console.log(this.sections);
  }



  deleteSection(section: Section) {
    let confirmation = confirm("Are you sure? You want to delete this section?");
    if (confirmation) {
      console.log("category deleted successfully");
      this.sectionsService.deleteSection(section.id).subscribe(() => {
        window.location.reload();
      });
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
