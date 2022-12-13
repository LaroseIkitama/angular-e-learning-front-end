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
        'id': new FormControl(500),
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'level': new FormControl(null, Validators.required),
        'duration': new FormControl(null, Validators.required),
        'category': new FormControl(null, Validators.required),
        'status': new FormControl(0),
        // 'userId': new FormControl(3),
      }),
      'content': new FormArray([]),
      'media': new FormGroup({
        'image': new FormControl(null, Validators.required),
        'video': new FormControl(null, Validators.required),
      })
    });

    console.log('ETAPE 1 - INFORMATION -');
    console.table(this.courseForm.value);
  }
}
