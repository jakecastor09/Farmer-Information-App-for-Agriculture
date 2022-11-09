/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, switchMap } from 'rxjs/operators';
import { UserSelectedCropsAndLivestock } from './userSelectedCropsAndLivestock.model';
import { environment } from 'src/environments/environment';

const weatherApiUrl = environment.weatherApiUrl;
const weatherApiKey = environment.weatherApiKey;

interface WeatherResponseData {
  current: object;
  hourly: Array<object>;
  lat: number;
  lon: number;
  daily: Array<object>;
  timezone: string;
  timezone_offset: number;
}
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
  private weatherData;
  private userSelectedCropsAndLivestock = new BehaviorSubject<
    UserSelectedCropsAndLivestock[]
  >([]);

  constructor(private http: HttpClient) {}

  fetchWeatherData() {
    return this.http
      .get<WeatherResponseData>(
        `${weatherApiUrl}onecall?lat=${15.266623}&lon=${120.915913}&units=metric&exclude=minutely&appid=${weatherApiKey}`
      )
      .subscribe((data) => {
        this.weatherData = data;
        return data;
      });
  }

  getWeatherData() {
    return this.weatherData;
  }

  updateUserSelectedCropsAndLivestock(
    userId: string,
    crops: Array<string>,
    livestock: Array<string>
  ) {
    let updatedUserSelectedCropsAndLivestock: UserSelectedCropsAndLivestock[];
    return this.userSelectedCropsAndLivestock.pipe(
      take(1),
      switchMap((userSelectedCropsAndLivestock) => {
        const updatedIndex = userSelectedCropsAndLivestock.findIndex(
          (cl) => cl.userId === userId
        );
        //get all the userSelectedCropsAndLivestock
        updatedUserSelectedCropsAndLivestock = [
          ...userSelectedCropsAndLivestock,
        ];

        //get the old Item
        const oldUserSelectedCropsAndLivestock =
          updatedUserSelectedCropsAndLivestock[updatedIndex];

        //updating item
        updatedUserSelectedCropsAndLivestock[updatedIndex] =
          new UserSelectedCropsAndLivestock(
            userId,
            oldUserSelectedCropsAndLivestock.id,
            crops,
            livestock
          );

        return this.http.put(
          `https://agri-app-96063-default-rtdb.firebaseio.com/user-selected-crops-and-livestock/${oldUserSelectedCropsAndLivestock.id}.json`,
          { ...updatedUserSelectedCropsAndLivestock[updatedIndex] }
        );
      }),
      tap(() =>
        this.userSelectedCropsAndLivestock.next(
          updatedUserSelectedCropsAndLivestock
        )
      )
    );
  }

  getOneUserSelectedCropsAndLivestock(userId: string) {
    let data: UserSelectedCropsAndLivestock;

    this.userSelectedCropsAndLivestock.asObservable().subscribe((res) => {
      const singleData = res.filter((item) => item.userId === userId)[0];

      data = new UserSelectedCropsAndLivestock(
        singleData.userId,
        singleData.id,
        singleData.crops,
        singleData.livestock
      );
    });

    return this.http
      .get<UserSelectedCropsAndLivestock>(
        `https://agri-app-96063-default-rtdb.firebaseio.com/user-selected-crops-and-livestock/${data.id}.json`
      )
      .pipe(
        map(
          (res) =>
            new UserSelectedCropsAndLivestock(
              res.userId,
              data.id,
              res.crops,
              res.livestock
            )
        )
      );
  }

  getAllUserSelectedCropsAndLivestock() {
    return this.userSelectedCropsAndLivestock.asObservable();
  }

  addUserSelectedCropsAndLivestock(
    userId: string,
    crops: Array<string>,
    livestock: Array<string>
  ) {
    let generatedId: string;
    const newUserSelectedCropsAndLivestock = new UserSelectedCropsAndLivestock(
      userId,
      Math.random().toString(),
      crops,
      livestock
    );
    return this.http
      .post<{ name: string }>(
        'https://agri-app-96063-default-rtdb.firebaseio.com/user-selected-crops-and-livestock.json',
        { ...newUserSelectedCropsAndLivestock, id: null }
      )
      .pipe(
        switchMap((res) => {
          generatedId = res.name;
          return this.userSelectedCropsAndLivestock;
        }),
        take(1),
        tap((res) => {
          newUserSelectedCropsAndLivestock.id = generatedId;
          this.userSelectedCropsAndLivestock.next(
            res.concat(newUserSelectedCropsAndLivestock)
          );
        })
      );
  }

  //fetch it on home screen and add spinner
  fetchUserSelectedCropsAndLivestock() {
    return this.http
      .get<{ [key: string]: UserSelectedCropsAndLivestock }>(
        'https://agri-app-96063-default-rtdb.firebaseio.com/user-selected-crops-and-livestock.json'
      )
      .pipe(
        map((res) => {
          const selectedCropsAndLivestock = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              selectedCropsAndLivestock.push(
                new UserSelectedCropsAndLivestock(
                  res[key].userId,
                  key,
                  res[key].crops,
                  res[key].livestock
                )
              );
            }
          }
          return selectedCropsAndLivestock;
        }),
        tap((selectedCropsAndLivestock) => {
          this.userSelectedCropsAndLivestock.next(selectedCropsAndLivestock);
        })
      );
  }

  updateCropsLivestock(documentId, data) {
    this.http
      .put(
        `https://agri-app-96063-default-rtdb.firebaseio.com/crops-livestock/${documentId}.json`,
        { ...data }
      )
      .subscribe();
  }

  //usersInfo
  getUser() {
    return this.currentUser;
  }

  getAllUser() {
    return this.allUsers;
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
