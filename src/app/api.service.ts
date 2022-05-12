import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
  }

  //Farmers Table
  addFirstName(data) {
    return this.http.post(
      'http://localhost/projects/farmer-information-app-for-agriculture/backend/farmers/create.php',
      data
    );
  }
  getFirstName() {
    return this.http.get(
      'http://localhost/projects/farmer-information-app-for-agriculture/backend/farmers/getFarmer.php'
    );
  }

  //Crops Table
  addCrops(data) {
    return this.http.post(
      'http://localhost/projects/farmer-information-app-for-agriculture/backend/crops/create.php',
      data
    );
  }

  //Crops Table
  addLivestocks(data) {
    return this.http.post(
      'http://localhost/projects/farmer-information-app-for-agriculture/backend/livestocks/create.php',
      data
    );
  }
}
