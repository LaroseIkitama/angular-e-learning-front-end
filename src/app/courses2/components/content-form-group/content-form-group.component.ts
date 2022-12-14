import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Section } from 'src/app/core/models/section.model';
import { DialogChapterFormGroupComponent } from '../dialog-chapter-form-group/dialog-chapter-form-group.component';
import { DialogChapterUpdateFormGroupComponent } from '../dialog-chapter-update-form-group/dialog-chapter-update-form-group.component';
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
  currentChapterForm!: FormGroup;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
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
        'id': new FormControl(500),
        'title': new FormControl(null, Validators.required),
      }),
      'chapters': new FormArray([])
    });
    const dialogRef = this.matDialog.open(DialogSectionFormGroupComponent, {
      width: '80%',
      enterAnimationDuration: '500ms',
      data: { formSection: this.sectionInputForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
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
        'id': new FormControl(500),
        'title': new FormControl(null, Validators.required),
      }),
      'chapters': new FormArray([])
    });
    this.currentSectionForm.value.id = this.form.value.content[index].id;
    this.currentSectionForm.value.title = this.form.value.content[index].title;
    this.currentSectionForm.value.chapters=this.form.value.content[index].chapters;
    let sharedData!: Section;
    sharedData = this.form.value.content[index].section;
    console.log('SHARED = ', sharedData.title);
    console.table(this.form.value.content[index].chapters);
    const dialogRef = this.matDialog.open(DialogSectionUpdateFormGroupComponent, {
      width: '80%',
      enterAnimationDuration: '500ms',
      data: {
        formSection: this.currentSectionForm,
        titleShared: sharedData.title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currentSectionForm.value.section.id = result.data.value.section.id;
        this.currentSectionForm.value.section.title = result.data.value.section.title;
        this.currentSectionForm.value.chapters = this.form.value.content[index].chapters;
        this.form.value.content[index] = this.currentSectionForm.value;
        console.log("Formulary de base apres update d'information");
        console.log( this.form.value.content[index]);
      }
    });
  }

  addChapter(index: number) {

    this.chapterInputForm = new FormGroup({
      'id': new FormControl(500),
      'title': new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required),
      'section': new FormControl(null)
    });

    const dialogRef = this.matDialog.open(DialogChapterFormGroupComponent, {
      width: '80%',
      enterAnimationDuration: '500ms',
      data: { formChapter: this.chapterInputForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed', result.data.value);

        this.chapterInputForm = result.data;
        this.form.value.content[index].chapters.push(this.chapterInputForm.value);
        console.log(this.form.value.content[index].chapters);
      }
    });
  }

  step2Submitted() {

    (<FormArray>this.form.get('content')).controls.forEach(() => {
      (<any>Object).values().forEach((control: FormControl) => {
          control.markAsTouched();
          control.updateValueAndValidity();
      })
    });
  }

  onDeleteChapter(indexSection:number,indexChapter:number){
    this.form.value.content[indexSection].chapters.pop(this.form.value.content[indexSection].chapters[indexChapter]);
  }
  onUpdateChapter(indexSection:number,indexChapter:number){
    this.currentChapterForm = new FormGroup({
      'id': new FormControl(500),
      'title': new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required),
      'section': new FormControl(null)
    });
    this.currentChapterForm.value.id=this.form.value.content[indexSection].chapters[indexChapter].id;
    this.currentChapterForm.value.title=this.form.value.content[indexSection].chapters[indexChapter].title;
    this.currentChapterForm.value.content=this.form.value.content[indexSection].chapters[indexChapter].content;
    this.currentChapterForm.value.section=this.form.value.content[indexSection].chapters[indexChapter].section;
    console.log("Chapter entrain d'etre modifer");
    console.table(this.currentChapterForm.value);
    const dialogRef = this.matDialog.open(DialogChapterUpdateFormGroupComponent, {
      width: '80%',
      enterAnimationDuration: '500ms',
      data: { formChapter: this.currentChapterForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("'ICIIIII AVANT");
        console.table(this.currentChapterForm.value);
        console.log('The dialog was closed', result.data.value);
        if(result.data.value.title!=null){
          this.currentChapterForm.value.title=result.data.value.title
        }
        if(result.data.value.content!=null){
          this.currentChapterForm.value.content=result.data.value.content
        }
        console.log("'ICIIIII APRES");
        console.table(this.currentChapterForm.value);
        this.form.value.content[indexSection].chapters[indexChapter]=this.currentChapterForm.value;

      }
    });

  }
}
