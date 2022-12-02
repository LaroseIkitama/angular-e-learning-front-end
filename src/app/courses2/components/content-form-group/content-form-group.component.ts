import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogChapterFormGroupComponent } from '../dialog-chapter-form-group/dialog-chapter-form-group.component';
import { DialogSectionFormGroupComponent } from '../dialog-section-form-group/dialog-section-form-group.component';
import { DialogSectionUpdateFormGroupComponent } from '../dialog-section-update-form-group/dialog-section-update-form-group.component';

@Component({
  selector: 'app-content-form-group',
  templateUrl: './content-form-group.component.html',
  styleUrls: ['./content-form-group.component.scss']
})
export class ContentFormGroupComponent implements OnInit {

  @Input() form!: FormGroup

  sectionInputForm!: FormGroup;
  currentSectionForm!: FormGroup;
  chapterInputForm!: FormGroup;

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
      'section': new FormGroup({
        'id': new FormControl(null),
        'title': new FormControl(null, Validators.required),
      }),
      'chapters': new FormArray([])
    });
    const dialogRef = this.matDialog.open(DialogSectionFormGroupComponent, {
      width: '40%',
      enterAnimationDuration: '500ms',
      data: { formSection: this.sectionInputForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      /* console.log('The dialog was closed', result.data.value); */
      this.sectionInputForm = result.data;
      this.form.value.content.push(this.sectionInputForm.value);
      console.log("Formulary de base apres saisie d'information");
      console.log(this.form.value.content[0].section.title);
      for (let element of this.form.value.content) {
        //console.log(element.section.title);
        //console.log(element.chapters);
        console.log(this.form.value.content[0].chapters);
      }
    });
  }

  onDelete(index: number) {
    console.log("Valeur a supprimer");
    console.log(this.form.value.content[index]);

    console.log("Tableau avant suppression");
    console.log(this.form.value.content);
    console.log("Tableau Apres suppression");
    this.form.value.content.pop(this.form.value.content[index]);
    console.log(this.form.value.content);
  }

  onUpdate(index: number) {
    this.currentSectionForm = new FormGroup({
      'section': new FormGroup({
        'id': new FormControl(null),
        'title': new FormControl(null, Validators.required),
      }),
      'chapters': new FormArray([])
    });
    this.currentSectionForm.value.id = this.form.value.content[index].id;
    this.currentSectionForm.value.title = this.form.value.content[index].title;

    const dialogRef = this.matDialog.open(DialogSectionUpdateFormGroupComponent, {
      width: '40%',
      enterAnimationDuration: '500ms',
      data: { formSection: this.currentSectionForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.currentSectionForm = result.data;
      this.form.value.content[index] = this.currentSectionForm.value;
      console.log("Formulary de base apres update d'information");
      console.log(this.form.value);
    });
  }

  addChapter(index: number) {

    this.chapterInputForm = new FormGroup({
      'id': new FormControl(null),
      'title': new FormControl(null, Validators.required),
      'video': new FormControl(null, Validators.required),
      'sectionId': new FormControl(null)
    });

    const dialogRef = this.matDialog.open(DialogChapterFormGroupComponent, {
      width: '100%',
      enterAnimationDuration: '500ms',
      data: { formChapter: this.chapterInputForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.data.value);

      this.chapterInputForm = result.data;
      this.form.value.content[index].chapters.push(this.chapterInputForm.value);
      console.log(this.form.value.content[index].chapters);
    });
  }
}
