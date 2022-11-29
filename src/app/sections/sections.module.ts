import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSectionComponent } from './components/new-section/new-section.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { UpdateSectionComponent } from './components/update-section/update-section.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { DialogSectionComponent } from './components/dialog-section/dialog-section.component';



@NgModule({
  declarations: [
    NewSectionComponent,
    SectionListComponent,
    UpdateSectionComponent,
    DialogSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NewSectionComponent,
    SectionListComponent,
    UpdateSectionComponent,
    DialogSectionComponent
  ]
})
export class SectionsModule { }
