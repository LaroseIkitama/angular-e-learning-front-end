import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { CoreModule } from './core/core.module';
import { CategoriesModule } from './categories/categories.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Courses2Module } from './courses2/courses2.module';
import { SectionsModule } from './sections/sections.module';
import { LogoutComponent } from './logout/logout.component';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    CategoriesModule,
    Courses2Module,
    SectionsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
