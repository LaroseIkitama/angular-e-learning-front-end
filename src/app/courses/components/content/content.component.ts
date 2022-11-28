import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalPopupSectionTitleComponent } from '../modal-popup-section-title/modal-popup-section-title.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }
  @Input() form!: FormGroup;

  ngOnInit(): void {
  }

  step2Submitted() {
    this.form.get('content')!.get('sectionTitle')!.markAllAsTouched();
    this.form.get('content')!.get('sectionTitle')!.updateValueAndValidity();

    this.form.get('content')!.get('chapterTitle')!.markAllAsTouched();
    this.form.get('content')!.get('chapterTitle')!.updateValueAndValidity();


    this.form.get('content')!.get('textContent')!.markAllAsTouched();
    this.form.get('content')!.get('textContent')!.updateValueAndValidity();

    this.form.get('content')!.get('videoContent')!.markAllAsTouched();
    this.form.get('content')!.get('videoContent')!.updateValueAndValidity();
  }

  onSectionTitle() {
    this.matDialog.open(ModalPopupSectionTitleComponent, {
      width: '40%',
      enterAnimationDuration: '500ms'
    });
  }

  newSection(event:any){
    console.log('Content bitch');
    console.log(event);
  }
}
