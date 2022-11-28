import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {
  trainerForm!: FormGroup;
  imageUrl = "../../assets/images/img-icon-2.png";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.trainerForm = this.formBuilder.group({
      id: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      avatar: [null, Validators.required],
      biography: [null, Validators.required],
      website: [null, Validators.required]
    })
  }

  onSelectFile(e: any) {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
    }
  }
  onSubmitForm() {
    console.log(this.trainerForm.value);
  }

}
