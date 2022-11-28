import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { tap } from 'rxjs';
import { Chapter } from 'src/app/core/models/chapter.model';
import { ChaptersServices } from 'src/app/core/services/chapters.services';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.scss']
})
export class NewChapterComponent implements OnInit {

  public Editor = ClassicEditor;
  newChapter = new Chapter();
  chapterForm!: FormGroup;

  checkCKEditor: any = false;



  constructor(private chaptersService: ChaptersServices,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.chapterForm = this.formBuilder.group({
      id: [],
      title: [null, Validators.required],
      content: [null, Validators.required]
    });
  }


  createChapter() {
    this.chaptersService.createChapter(this.newChapter).subscribe(chapter => {
      this.router.navigateByUrl('/chapter-list');
    })

  }
  submitForm() {
    console.log(this.chapterForm.value);
  }

  onSubmitForm() {
    if (this.chapterForm.get('content')?.valid) {
      this.checkCKEditor = true;
      this.chapterForm.get('title')?.markAllAsTouched();
      this.chaptersService.createChapter(this.chapterForm.value).pipe(
        tap(() => this.router.navigateByUrl('/chapter-list'))
      ).subscribe();
      /* console.log('Formulary submitted');
      console.log(this.chapterForm.value); */
    }
  }

}

