import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  categories = [
    {
      'id': 1,
      'name': "Development"
    },
    {
      'id': 2,
      'name': "Reseaux"
    },
    {
      'id': 3,
      'name': "Design"
    },
  ];
  languages = [
    {
      'id': 1,
      'name': "French"
    },
    {
      'id': 2,
      'name': "English"
    },
  ];
  levels = [
    {
      'id': 1,
      'name': "Easy"
    },
    {
      'id': 2,
      'name': "Medium"
    },
    {
      'id': 3,
      'name': "Difficult"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
