import { Component, EventEmitter, OnInit, Optional, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chapter } from 'src/app/core/models/chapter.model';

@Component({
  selector: 'app-dialog-chapter-form-group',
  templateUrl: './dialog-chapter-form-group.component.html',
  styleUrls: ['./dialog-chapter-form-group.component.scss']
})
export class DialogChapterFormGroupComponent implements OnInit {
  chapterDialogForm!: FormGroup;
  @Output() chapterDialog = new EventEmitter<Chapter>;
  constructor(public dialogRef: MatDialogRef<DialogChapterFormGroupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.chapterDialogForm = data.formChapter;
  }

  ngOnInit(): void {
    this.chapterDialogForm = new FormGroup({
      'id': new FormControl(500),
      'title': new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required),
      'section': new FormControl(null)
    });
  }

  onAddChapter() {
    this.dialogRef.close({ event: 'close', data: this.chapterDialogForm });
  }

}
