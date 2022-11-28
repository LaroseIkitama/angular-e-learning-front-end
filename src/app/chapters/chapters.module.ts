import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewChapterComponent } from './components/new-chapter/new-chapter.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { UpdateChapterComponent } from './components/update-chapter/update-chapter.component';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
/* import { CKEditorModule } from '@ckeditor/ckeditor5-angular'; */
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleChapterComponent } from './components/single-chapter/single-chapter.component';




@NgModule({
  declarations: [
    NewChapterComponent,
    ChapterListComponent,
    UpdateChapterComponent,
    SingleChapterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CKEditorModule,
    MaterialModule
  ],
  exports: [
    NewChapterComponent,
    ChapterListComponent,
    UpdateChapterComponent
  ]
})
export class ChaptersModule { }
