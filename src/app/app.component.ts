import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'e-learning-front';
  sideBarOpen=true;
constructor(private router:Router){}

  ngOnInit(): void {
    console.log(this.router.url);
  }

  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
