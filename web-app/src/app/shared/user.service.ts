import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Login } from './login.model';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    'X-API-AUTH-KEY': 'ycoGFcyjLqTvg9LewuvtLHx72i2CKEMt'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootURL = 'https://api2.dev.netobjex.com/api';
  formData: User;
  loginData: Login;
  constructor(private http: HttpClient) {}
  postData(endpoint: String , formData: User) {
    return this.http.post(this.rootURL + '/' + endpoint, JSON.stringify(formData), httpOptions);
  }
}
