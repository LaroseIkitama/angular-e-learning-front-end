import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { DialogAlertComponent } from './components/dialog-alert/dialog-alert.component';
import { DialogAlertDeleteComponent } from './components/dialog-alert-delete/dialog-alert-delete.component';



@NgModule({
  declarations: [

    DialogAlertComponent,
     DialogAlertDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    DialogAlertComponent
  ],
  providers:[]
})
export class CoreModule { }
