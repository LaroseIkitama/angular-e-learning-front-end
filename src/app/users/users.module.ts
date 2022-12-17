import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { NewAdminComponent } from './components/admin/new-admin/new-admin.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { UpdateTrainerComponent } from './components/trainer/update-trainer/update-trainer.component';
import { NewTrainerComponent } from './components/trainer/new-trainer/new-trainer.component';
import { TrainerListComponent } from './components/trainer/trainer-list/trainer-list.component';
import { NewLearnerComponent } from './components/learner/new-learner/new-learner.component';
import { UpdateLearnerComponent } from './components/learner/update-learner/update-learner.component';
import { LearnerListComponent } from './components/learner/learner-list/learner-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LearnerDashboardComponent } from './components/learner/learner-dashboard/learner-dashboard.component';
import { TrainerDashboardComponent } from './components/trainer/trainer-dashboard/trainer-dashboard.component';
import { ParametersComponent } from './components/admin/parameters/parameters.component';



@NgModule({
  declarations: [
    AdminListComponent,
    NewAdminComponent,
    UpdateAdminComponent,
    UpdateTrainerComponent,
    NewTrainerComponent,
    TrainerListComponent,
    NewLearnerComponent,
    UpdateLearnerComponent,
    LearnerListComponent,
    AdminDashboardComponent,
    LearnerDashboardComponent,
    TrainerDashboardComponent,
    ParametersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    AdminListComponent,
    NewAdminComponent,
    UpdateAdminComponent,
    UpdateTrainerComponent,
    NewTrainerComponent,
    TrainerListComponent,
    NewLearnerComponent,
    UpdateLearnerComponent,
    LearnerListComponent,
    AdminDashboardComponent,
    LearnerDashboardComponent,
    TrainerDashboardComponent
  ]
})
export class UsersModule { }
