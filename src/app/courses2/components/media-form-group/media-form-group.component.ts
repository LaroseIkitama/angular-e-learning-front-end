import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-media-form-group',
  templateUrl: './media-form-group.component.html',
  styleUrls: ['./media-form-group.component.scss']
})
export class MediaFormGroupComponent implements OnInit {

  @Input() form!: FormGroup
  constructor() { }

  ngOnInit(): void {

  }


  step3Submitted() {
    this.form.get('media')!.get('image')!.markAllAsTouched();
    this.form.get('media')!.get('image')!.updateValueAndValidity();

    this.form.get('media')!.get('video')!.markAllAsTouched();
    this.form.get('media')!.get('video')!.updateValueAndValidity();
  }

}
