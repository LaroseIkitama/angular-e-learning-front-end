import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-popup-section-title',
  templateUrl: './modal-popup-section-title.component.html',
  styleUrls: ['./modal-popup-section-title.component.scss']
})
export class ModalPopupSectionTitleComponent implements OnInit {
  sectionForm!: FormGroup;
  @Output() addSection = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sectionForm = this.formBuilder.group({
      title: [null, Validators.required]
    });
  }

  addNewSection() {
    console.log(this.sectionForm.value);
    //this.addSection.emit(this.sectionForm.value);
  }

}
