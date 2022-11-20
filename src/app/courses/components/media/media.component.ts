import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor() { }

@Input() form!:FormGroup
  ngOnInit(): void {
  }

  step3Submitted() {
    this.form.get('media')!.get('imageCourse')!.markAllAsTouched();
    this.form.get('media')!.get('imageCourse')!.updateValueAndValidity();

    this.form.get('media')!.get('videoCourse')!.markAllAsTouched();
    this.form.get('media')!.get('videoCourse')!.updateValueAndValidity();
  }
}
