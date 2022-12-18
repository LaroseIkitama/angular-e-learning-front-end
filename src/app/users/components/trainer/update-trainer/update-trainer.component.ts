import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/usersService';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.scss']
})
export class UpdateTrainerComponent implements OnInit {

  user: User | undefined;
  status!: string;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit(): void {
    const userId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (userId) {
      this.usersService.getUser(+userId).subscribe((user) => {
        this.user = user;
      })
    } else {
      this.user = undefined;
    }
  }

  updateUser() {
    if (this.user) {
      if (this.status == "false")
        this.user.enabled = false;
      if (this.status == "true")
        this.user.enabled = true;
      this.usersService.updateUser(this.user)
        .subscribe((user) => {
          if (user) {
            this.router.navigate(['/trainer-list']);
          }
        });
    }
  }
}
