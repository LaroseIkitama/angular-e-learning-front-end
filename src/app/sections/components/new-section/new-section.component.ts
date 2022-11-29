import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Section } from 'src/app/core/models/section.model';



@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {


  displayedColumns: string[] = ['Id', 'Title'];
  sections: Section[] = [
    /* { id: 1, title: "title", description: "Une description" },
    { id: 2, title: "title 2", description: "Une description 2" } */
  ];


  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor() {

   }

  ngOnInit(): void {
    /* console.log(this.dataSource[0][0]); */
  }

  addData() {
    let newSection:Section={id:3,title:"new title",description:"new description"};
   this.sections.push(newSection);
   console.log(this.sections);
   this.table.renderRows();
  }
  removeData() {
    this.sections.pop();
    console.log(this.sections);
    this.table.renderRows();

  }

}
