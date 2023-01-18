import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginUrl: string = environment.loginBaseUrl;
  constructor(private http: HttpClient) {}



  loginGetService(login: Login) {
    const headers = {
      'content-type': 'application/json',
      'pkey': '3fdfabc1bcc185d03fe95d7e7dc9803d',
      'apikey': 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const body = JSON.stringify(login);
    // console.log(this.loginUrl,login,"ttttttttttttt");
    
    return this.http.post(this.loginUrl,body, { headers: headers });
  }


}
