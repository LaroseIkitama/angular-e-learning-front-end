import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from 'src/app/core/models/chapter.model';
import { ChaptersServices } from 'src/app/core/services/chapters.services';

@Component({
  selector: 'app-update-chapter',
  templateUrl: './update-chapter.component.html',
  styleUrls: ['./update-chapter.component.scss']
})
export class UpdateChapterComponent implements OnInit {

  currentChapter = new Chapter();
  chapters!:Chapter[];
  updatedChapterId!:number;
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    private chaptersService:ChaptersServices) { }

  ngOnInit(): void {
    this.chaptersService.getChapter(this.activatedRoute.snapshot.params['id']).subscribe(chapter=>{
      this.currentChapter = chapter;
    });
  }

}
