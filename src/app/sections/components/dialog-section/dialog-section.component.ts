import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Section } from 'src/app/core/models/section.model';

@Component({
  selector: 'app-dialog-section',
  templateUrl: './dialog-section.component.html',
  styleUrls: ['./dialog-section.component.scss']
})
export class DialogSectionComponent implements OnInit {
  sectionForm!:FormGroup;
  @Output() section = new EventEmitter<Section>;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sectionForm = this.formBuilder.group({
      id: [null,],
      title: [null, Validators.required]
    });
  }

  onAddSection(){
   // console.log(this.sectionForm.value);
   this.section.emit(this.sectionForm.value);
  }
}
