import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFormationComponent } from './components/new-formation/new-formation.component';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { UpdateFormationComponent } from './components/update-formation/update-formation.component';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    NewFormationComponent,
    FormationListComponent,
    UpdateFormationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NewFormationComponent,
    FormationListComponent,
    UpdateFormationComponent
  ]
})
export class FormationsModule { }
