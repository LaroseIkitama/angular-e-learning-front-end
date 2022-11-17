import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  chapiters: number;
  status: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',chapiters:3,status:0},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',chapiters:3,status:0},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',chapiters:3,status:0},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',chapiters:3,status:0},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',chapiters:3,status:0},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',chapiters:3,status:0},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',chapiters:3,status:0},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',chapiters:3,status:0},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',chapiters:3,status:0},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',chapiters:3,status:0},
  {position: 11, name: 'Neon', weight: 20.1797, symbol: 'HY',chapiters:3,status:0},
];

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.scss']
})
export class TableCourseComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','chapiters','status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
