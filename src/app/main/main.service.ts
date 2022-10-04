/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  private isDarkMode = false;
  private allCrops;
  private allLivestock;
  private user: User;
  private users = new BehaviorSubject<User[]>([]);
  private allUsers = [];
  private userId: string;
  private _userIdName = null;
  private currentUser: User;

  constructor(private http: HttpClient) {}

  //usersInfo
  getUser() {
    return this.currentUser;
  }

  setAllUsers(data) {
    const users = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        users.push(
          new User(
            key,
            data[key].userId,
            data[key].firstName,
            data[key].middleName,
            data[key].lastName,
            data[key].age,
            data[key].birthday,
            data[key].email,
            data[key].purok
          )
        );
      }
    }
    this.allUsers = users;
    console.log(this.allUsers[1]);
  }

  getCurrentUser(userId: string) {
    return this.allUsers.find((item) => item.userId === userId);
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  fetchUsers() {
    return this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((responseData) => {
          const users = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              users.push(
                new User(
                  key,
                  responseData[key].userId,
                  responseData[key].firstName,
                  responseData[key].middleName,
                  responseData[key].lastName,
                  responseData[key].age,
                  responseData[key].birthday,
                  responseData[key].email,
                  responseData[key].purok
                )
              );
            }
          }
          return users;
        }),
        tap((users) => {
          this.users.next(users);
        })
      );
  }

  addUser(
    userId: string,
    firstName: string,
    middleName: string,
    lastName: string,
    age: number,
    birthday: Date,
    email: string,
    purok: number
  ) {
    let generatedIdFromFirebase: string;
    const temporaryId = firstName.length + 1 + '';
    const newUser = new User(
      temporaryId,
      userId,
      firstName,
      middleName,
      lastName,
      age,
      birthday,
      email,
      purok
    );
    return this.http
      .post<{ name: string }>(
        'https://agri-app-96063-default-rtdb.firebaseio.com/users.json',
        {
          ...newUser,
          id: null,
        }
      )
      .pipe(
        switchMap((res) => {
          generatedIdFromFirebase = res.name;
          return this.users;
        }),
        take(1),
        tap((users) => {
          newUser.id = generatedIdFromFirebase;
          this._userIdName = generatedIdFromFirebase;
          this.users.next(users.concat(newUser));
          ///user id not showing on the database
        })
      );
  }

  //Dark mode
  setIsDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  getIsDarkMode() {
    return this.isDarkMode;
  }
  //Crops data

  requestCropsData(data) {
    this.allCrops = data;
  }

  getAllCropsData() {
    return this.allCrops;
  }

  //Livestock Data
  requestLivestockData(data) {
    this.allLivestock = data;
  }
  getAllLivestockData() {
    return this.allLivestock;
  }
}
