import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  constructor() { }
  @Input() form!: FormGroup;
  formSubmitted: boolean = false;
  ngOnInit(): void {
  }
  submit() {
    console.log('submit');
    console.log(this.form.value);
    this.formSubmitted = true;
  }
}
