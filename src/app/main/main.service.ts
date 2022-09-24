import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private isDarkMode = false;

  constructor() {}

  setIsDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  getIsDarkMode() {
    return this.isDarkMode;
  }
}
