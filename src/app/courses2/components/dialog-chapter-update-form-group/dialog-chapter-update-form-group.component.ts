import { Component, EventEmitter, Inject, OnInit, Optional, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chapter } from 'src/app/core/models/chapter.model';

@Component({
  selector: 'app-dialog-chapter-update-form-group',
  templateUrl: './dialog-chapter-update-form-group.component.html',
  styleUrls: ['./dialog-chapter-update-form-group.component.scss']
})
export class DialogChapterUpdateFormGroupComponent implements OnInit {
  chapterDialogForm!: FormGroup;
  @Output() chapterDialog = new EventEmitter<Chapter>;
  constructor(public dialogRef: MatDialogRef<DialogChapterUpdateFormGroupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.chapterDialogForm = new FormGroup({
      'id': new FormControl(null),
      'title': new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required),
      'section': new FormControl(null)
    });
  }
  onAddChapter() {
    this.dialogRef.close({ event: 'close', data: this.chapterDialogForm });
  }
}
