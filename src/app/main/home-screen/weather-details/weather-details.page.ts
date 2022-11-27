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
  daily: Array<object>;
  timezone: string;
  timezone_offset: number;
}
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  daysOfAWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  clickedIndex;
  titleCurrentWeather = 'Current Weather';
  tomorrowWeatherData = {
    temp: 0,
    main: '',
    desc: '',
    tempMor: 0,
    tempEve: 0,
    feelsMor: 0,
    feelsEve: 0,
    humidity: 0,
    pressure: 0,
    dewpoint: 0,
    clouds: 0,
    windspeed: 0,
    sunrise: '',
    icon: '',
    dt: 0,
  };
  currentWeatherData = {
    temp: 0,
    humidity: 0,
    pressure: 0,
    dewpoint: 0,
    description: '',
    main: '',
    feels: 0,
    icon: '',
  };
  currentDate;
  currentWeather;
  currentWeatherTemp;
  currentWeatherDesc;
  currentWeatherFeels;
  currentWeatherMain;
  currentWeatherHumidity;
  currentWeatherPressure;
  currentWeatherDewPoint;
  currentWeatherIcon;

  hourlyWeatherData;
  dailyWeatherData;

  tomorrowWeather;

  weatherData: WeatherResponseData;
  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.weatherData = this.mainService.getWeatherData();
    this.currentWeather = this.weatherData?.current;
    this.hourlyWeatherData = this.weatherData?.hourly.slice(0, 14);
    console.log(this.hourlyWeatherData);

    this.currentWeatherTemp = Math.floor(this.currentWeather?.temp);
    this.currentWeatherMain = this.currentWeather.weather[0].main;
    this.currentWeatherDesc = this.currentWeather.weather[0].description;
    this.currentWeatherFeels = Math.floor(this.currentWeather.feels_like);
    this.currentWeatherIcon = `http://openweathermap.org/img/wn/${this.currentWeather?.weather[0].icon}@2x.png`;
    this.currentWeatherHumidity = this.currentWeather?.humidity;
    this.currentWeatherPressure = this.currentWeather?.pressure;
    this.currentWeatherDewPoint = Math.floor(this.currentWeather?.dew_point);

    this.currentWeatherData.description = this.currentWeatherDesc;
    this.currentWeatherData.dewpoint = this.currentWeatherDewPoint;
    this.currentWeatherData.feels = this.currentWeatherFeels;
    this.currentWeatherData.humidity = this.currentWeatherHumidity;
    this.currentWeatherData.icon = this.currentWeatherIcon;
    this.currentWeatherData.main = this.currentWeatherMain;
    this.currentWeatherData.pressure = this.currentWeatherPressure;
    this.currentWeatherData.temp = this.currentWeatherTemp;

    this.dailyWeatherData = this.weatherData?.daily.slice(1, 7);

    this.tomorrowWeather = this.dailyWeatherData[0];
    console.log(this.tomorrowWeather);
    const tomorrowIcon = this.formatIconImg(
      this.tomorrowWeather.weather[0].icon
    );
    this.tomorrowWeatherData = {
      temp: Math.floor(this.tomorrowWeather.temp.day),
      main: this.tomorrowWeather.weather[0].main,
      desc: this.tomorrowWeather.weather[0].description,
      tempMor: Math.floor(this.tomorrowWeather.temp.morn),
      tempEve: Math.floor(this.tomorrowWeather.temp.night),
      feelsMor: Math.floor(this.tomorrowWeather.feels_like.morn),
      feelsEve: Math.floor(this.tomorrowWeather.feels_like.eve),
      humidity: this.tomorrowWeather.humidity,
      pressure: this.tomorrowWeather.pressure,
      dewpoint: this.tomorrowWeather.dew_point,
      clouds: this.tomorrowWeather.clouds,
      windspeed: this.tomorrowWeather.wind_speed,
      sunrise: this.formatTime(this.tomorrowWeather.sunrise),
      icon: tomorrowIcon,
      dt: this.tomorrowWeather.dt,
    };

    console.log(this.dailyWeatherData);

    const date = new Date(+this.currentWeather?.dt * 1000);

    const getDay = this.daysOfAWeek[date.getDay()];

    this.currentDate =
      'Today, ' +
      getDay +
      ' ' +
      date.getDate() +
      ', ' +
      date.toLocaleTimeString();

    console.log(date.getDate());
    console.log(date.toLocaleTimeString());
    console.log(getDay);

    // const unix = this.currentWeather?.dt;
    // const date = new Date(unix * 1000);
    // console.log(date.toUTCString());
    // const hours = date.getHours();
    // // Minutes part from the timestamp
    // const minutes = '0' + date.getMinutes();
    // // Seconds part from the timestamp
    // const seconds = '0' + date.getSeconds();

    // Will display time in 10:30:23 format

    // console.log(hours + ' ' + minutes + ' ' + seconds);

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
  }

  formatTime(dt: number) {
    const date = new Date(+dt * 1000);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;

    const strTime = hours + ':' + formatMinutes + ' ' + ampm;

    return strTime;
  }

  formatTemp(temp: number) {
    return Math.floor(temp);
  }
  formatIconImg(icon: string) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  format7DaysWeatherForecastDate(dt: number) {
    const date = new Date(+dt * 1000);
    return date.getDate() + '';
  }
  format7DaysWeatherForecastMonth(dt: number) {
    const date = new Date(+dt * 1000);
    return this.monthNames[date.getMonth()];
  }
  format7DaysWeatherForecastDay(dt: number) {
    const date = new Date(+dt * 1000);
    return this.daysOfAWeek[date.getDay()];
  }

  hourlyWeatherHandlerClick(data, index) {
    this.clickedIndex = index;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.currentWeatherData = {
      temp: Math.floor(data.temp),
      humidity: data.humidity,
      pressure: data.pressure,
      dewpoint: data.dew_point,
      description: data.weather[0].description,
      main: data.weather[0].main,
      feels: Math.floor(data.feels_like),
      icon,
    };

    this.titleCurrentWeather = this.formatTime(data.dt) + ' Weather';
  }

  formatDate(dt) {
    return new Date(dt * 1000).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
