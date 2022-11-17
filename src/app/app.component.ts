import { Component, OnInit } from '@angular/core';
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'e-learning-front';
  sideBarOpen=true;
  faBitcoin=faBitcoin;
  faHouse=faHouse

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
