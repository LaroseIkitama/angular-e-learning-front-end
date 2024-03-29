import { Component, EventEmitter, OnInit, Optional, Inject, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Section } from 'src/app/core/models/section.model';

@Component({
  selector: 'app-dialog-section-update-form-group',
  templateUrl: './dialog-section-update-form-group.component.html',
  styleUrls: ['./dialog-section-update-form-group.component.scss']
})
export class DialogSectionUpdateFormGroupComponent implements OnInit {
  sectionDialogForm!: FormGroup;
  @Output() sectionDialog = new EventEmitter<Section>;

  constructor(public dialogRef: MatDialogRef<DialogSectionUpdateFormGroupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.sectionDialogForm = data.formSection;
    console.log('UPDATE SECTION TIREEEEERR');
    console.log(data.titleShared);
  }

  ngOnInit(): void {
    this.sectionDialogForm = new FormGroup({
      'section': new FormGroup({
        'id': new FormControl(null),
        'title': new FormControl(null, Validators.required),
      }),
      'chapters': new FormArray([])
    });
  }

  onAddSection() {
    this.dialogRef.close({ event: 'close', data: this.sectionDialogForm });
  }

}
