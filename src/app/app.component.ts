import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'e-learning-front';

constructor(private router:Router, public authService:AuthService){}

  ngOnInit(): void {
    console.log(this.router.url);
  }
}
