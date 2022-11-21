import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.scss']
})
export class MultiformComponent implements OnInit {
  courseForm!: FormGroup;
  ngOnInit(): void {
    this.courseForm = new FormGroup({
      'information': new FormGroup({
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'language': new FormControl(null, Validators.required),
        'level': new FormControl(null, Validators.required),
        'category': new FormControl(null, Validators.required),
      }),
      'content': new FormGroup({
        'sectionTitle': new FormControl(null, Validators.required),
        'chapterTitle': new FormControl(null, Validators.required),
        'textContent': new FormControl(null, Validators.required),
        'videoContent': new FormControl(null)
      }),
      'media': new FormGroup({
        'imageUrl': new FormControl(null, Validators.required),
        'videoUrl': new FormControl(null, Validators.required)
      })
    })

  }


}
