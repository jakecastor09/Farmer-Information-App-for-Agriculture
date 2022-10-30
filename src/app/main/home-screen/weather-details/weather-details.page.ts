/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainService } from '../../main.service';

const weatherApiUrl = environment.weatherApiUrl;
const weatherApiKey = environment.weatherApiKey;

interface WeatherResponseData {
  current: object;
  hourly: Array<object>;
  lat: number;
  lon: number;
  minutely: Array<object>;
  timezone: string;
  timezone_offset: number;
}
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  currentWeather: object;
  hourlyWeatherData: Array<object>;
  weatherData: WeatherResponseData;
  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.weatherData = this.mainService.getWeatherData();
    this.currentWeather = this.weatherData.current;
    this.hourlyWeatherData = this.weatherData.hourly;

    // this.httpClient
    //   .get<WeatherResponseData>(
    //     `${weatherApiUrl}onecall?lat=${15.27801}&lon=${120.92008}&exclude=daily&appid=${weatherApiKey}`
    //   )
    //   .subscribe((data) => {
    //     this.currentWeather = data.current;
    //     this.hourlyWeatherData = data.hourly;

    //     console.log(data);
    //     console.log(this.currentWeather);
    //     console.log(this.hourlyWeatherData);
    //   });

    // let unix = dt;
    // const date = new Date(unix * 1000);
    // date.toUTCString();
  }
}
