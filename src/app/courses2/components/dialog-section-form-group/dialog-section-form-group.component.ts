import { Component, EventEmitter, OnInit, Optional, Inject, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Section } from 'src/app/core/models/section.model';

@Component({
  selector: 'app-dialog-section-form-group',
  templateUrl: './dialog-section-form-group.component.html',
  styleUrls: ['./dialog-section-form-group.component.scss']
})
export class DialogSectionFormGroupComponent implements OnInit {
  sectionDialogForm!: FormGroup;
  formIsValid = false;
  @Output() sectionDialog = new EventEmitter<Section>;

  constructor(public dialogRef: MatDialogRef<DialogSectionFormGroupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.sectionDialogForm = data.formSection;
  }

  ngOnInit(): void {
    this.sectionDialogForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required)
    });
  }

  onAddSection() {
    this.dialogRef.close({event:'close',data:this.sectionDialogForm});
    /*  this.sectionDialog.emit(this.sectionDialogForm.value); */
    /* console.log(this.sectionDialogForm.value);
    this.formIsValid = true; */
  }

}
