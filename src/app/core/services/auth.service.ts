import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/user.model";
import { UsersService } from "./usersService";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  users!: User[];

  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public role!: string;
  public userLoggedData = new User();

  constructor(private router: Router, private usersService: UsersService) {
    this.usersService.getUsers().subscribe((users) => this.users = users);
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.role = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('role');
    localStorage.removeItem('userData');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;

    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].username == user.username && this.users[index].password == user.password) {
        validUser = true;
        this.loggedUser = this.users[index].username;
        this.isloggedIn = true;
        this.role = this.users[index].role;

        localStorage.setItem('loggedUser', this.users[index].username);
        localStorage.setItem('isloggedIn', String(true));
        localStorage.setItem('role', String(this.users[index].role));
        localStorage.setItem('userData', JSON.stringify(this.users[index]));

        this.setLoggedUser();

        this.setUserLoggedData();
      }
    }
    return validUser;
  }
  setUserLoggedData(): any {
    const user = localStorage.getItem('userData');
    if (user) {
      this.userLoggedData = JSON.parse(user);
      return this.userLoggedData;
    }
  }
  setLoggedUser(): any {

    if (localStorage.getItem('loggedUser')) {
      return localStorage.getItem('loggedUser');
    } else {
      return false;
    }
  }
  isAdmin(): Boolean {
    let response!: boolean;
    if (!localStorage.getItem('role')) //this.role== undefiened
      response = false;
    if (localStorage.getItem('role') === "ADMIN")
      response = true;

    return response;
  }
  isTrainer(): Boolean {
    let response!: boolean;
    if (!localStorage.getItem('role')) //localStorage.getItem('role')== undefiened
      response = false;
    if (localStorage.getItem('role') === "FORMATEUR")
      response = true;

    return response;
  }
  isLearner(): Boolean {
    let response!: boolean;
    if (!localStorage.getItem('role')) //localStorage.getItem('role')== undefiened
      response = false;
    if (localStorage.getItem('role') === "APPRENANT")
      response = true;

    return response;
  }
  isSuperAdmin(): Boolean {
    let response!: boolean;
    if (!localStorage.getItem('role')) //localStorage.getItem('role')== undefiened
      response = false;
    if (localStorage.getItem('role') === "SUPER_ADMIN")
      response = true;

    return response;
  }
}
