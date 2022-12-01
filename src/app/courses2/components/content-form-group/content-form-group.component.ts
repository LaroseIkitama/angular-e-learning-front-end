import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-form-group',
  templateUrl: './content-form-group.component.html',
  styleUrls: ['./content-form-group.component.scss']
})
export class ContentFormGroupComponent implements OnInit {

@Input() form!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }
  step2Submitted() {

  }

  addSection(){
    const sectionForm = new FormGroup({
      title: new FormControl(null,Validators.required),
      chapiters: new FormArray([])
    });
    this.form.get('content')?.value;
  }
}
