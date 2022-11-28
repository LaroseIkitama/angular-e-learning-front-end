import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/core/models/chapter.model';
import { ChaptersServices } from 'src/app/core/services/chapters.services';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent implements OnInit {

  chapters!: any;
  dataSource!: MatTableDataSource<Chapter[]>;
  chapters$!: Observable<Chapter[]>;

  displayedColumn: string[] = ['id', 'title', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private chaptersService: ChaptersServices,
    private router: Router,
    private dialog: MatDialog) {
    this.chaptersService.getChapters().subscribe(chapter => {
      this.chapters = chapter;

      this.dataSource = new MatTableDataSource(this.chapters);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  ngOnInit(): void {
    this.chapters$ = this.chaptersService.getChapters();
  }

  deleteChapter(chapter: Chapter) {
    let confirmation = confirm("Are you sure? You want to delete this chapter?");
    if (confirmation) {
      console.log("Chapter deleted successfully");
      this.chaptersService.deleteChapter(chapter.id).subscribe(() => {
        window.location.reload();
      });
    }
  }

  onDetails(chapter:Chapter){
    console.log(chapter);
    this.router.navigateByUrl(`/details-chapter/${chapter.id}`);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
