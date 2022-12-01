import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Section } from 'src/app/core/models/section.model';
import { DialogSectionFormGroupComponent } from '../dialog-section-form-group/dialog-section-form-group.component';

@Component({
  selector: 'app-content-form-group',
  templateUrl: './content-form-group.component.html',
  styleUrls: ['./content-form-group.component.scss']
})
export class ContentFormGroupComponent implements OnInit {

  @Input() form!: FormGroup

  sectionInputForm!: FormGroup;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  step2Submitted() {

  }
  onDialog() {
    this.matDialog.open(DialogSectionFormGroupComponent, {
      width: '40%',
      enterAnimationDuration: '500ms'
    });
  }

  addSection() {
     this.sectionInputForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required),
    });
    const dialogRef = this.matDialog.open(DialogSectionFormGroupComponent, {
      width: '40%',
      enterAnimationDuration: '500ms',
      data: { formSection: this.sectionInputForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      /* console.log('The dialog was closed', result.data.value); */
      this.sectionInputForm=result.data;
      this.form.value.content.push(this.sectionInputForm.value);
      console.log("Formulaire de base apres saisie d'information");
      console.log(this.form.value);

    })
  }
}
