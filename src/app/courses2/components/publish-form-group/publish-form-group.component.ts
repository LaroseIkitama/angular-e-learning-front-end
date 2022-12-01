import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-publish-form-group',
  templateUrl: './publish-form-group.component.html',
  styleUrls: ['./publish-form-group.component.scss']
})
export class PublishFormGroupComponent implements OnInit {

  @Input() form!:FormGroup
  formSubmitted:boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log('submit');
    console.log(this.form.value);
    this.formSubmitted=true;
  }

}
