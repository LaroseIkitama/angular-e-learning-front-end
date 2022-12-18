import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/usersService';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  courseForm!: FormGroup;
  userConnect = new User();
  currentUser = new User();
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private usersService: UsersService) {
    this.userConnect = this.authService.setUserLoggedData();
    this.currentUser.id=this.userConnect.id;
    this.currentUser.username=this.userConnect.username;
    this.currentUser.firstName=this.userConnect.firstName;
    this.currentUser.lastName=this.userConnect.lastName;
    this.currentUser.email=this.userConnect.email;
    this.currentUser.password=this.userConnect.password;
    this.currentUser.biography=this.userConnect.biography;
    this.currentUser.website=this.userConnect.website;
    this.currentUser.role=this.userConnect.role;
    this.currentUser.enabled=this.userConnect.enabled;
    /* this.usersService.getUser(+this.userConnect.id).subscribe(
      (user) => {
        if (user) {
          this.currentUser = user;
        }
      }); */
  }

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
        'user': new FormControl(this.currentUser),
      }),
      'content': new FormArray([]),
      'media': new FormGroup({
        'image': new FormControl(null, Validators.required),
        'video': new FormControl(null, Validators.required),
      })
    });
  }
}
