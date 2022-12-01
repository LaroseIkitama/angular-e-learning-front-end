import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  courseForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      'information': new FormGroup({
        'id': new FormControl(null),
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'level': new FormControl(null, Validators.required),
        'duration': new FormControl(null, Validators.required),
        'userId': new FormControl(null),
        'categoryId': new FormControl(null, Validators.required),
        'status': new FormControl(0),
      }),
      'content': new FormArray([]),
      'media': new FormGroup({
        'image': new FormControl(null, Validators.required),
        'video': new FormControl(null, Validators.required),
      })
    });

/*     console.log(this.courseForm.controls['content'] as FormArray);
 */  }
}
