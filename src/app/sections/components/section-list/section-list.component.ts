import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Section } from 'src/app/core/models/section.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { SectionsService } from 'src/app/core/services/sections.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {

  courseName!:string;
  sections!: Section[];
  dataSource!: MatTableDataSource<Section[]>;
  displayedColumn: string[] = ['Id', 'Title', 'Course', 'Actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sectionsService: SectionsService,
    private coursesService: CoursesService) { }

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

  getNameOfCourse(id: number):string {

    this.coursesService.getCourse(id).subscribe(course => {
      this.courseName= course.title;
    });
    return this.courseName;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
