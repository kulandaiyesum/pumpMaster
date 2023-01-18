import { MaterialUsageType } from './../model/material-usage-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaterialUsageTypeService {
  public mutUrl: string = environment.apikpstUrl;
  constructor(private http: HttpClient) {}

  // material-usage-type  = mut
  mutPostService(mut: MaterialUsageType) {
    const headers = {
      'content-type': 'application/json',
      'pkey': '3fdfabc1bcc185d03fe95d7e7dc9803d',
      'apikey': 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const body = JSON.stringify(mut);
    // console.log('st save working');
    return this.http.post(this.mutUrl, body, { headers: headers });
  }

  mutGetService() {
    const headers = {
      'content-type': 'application/json',
      'pkey': '3fdfabc1bcc185d03fe95d7e7dc9803d',
      'apikey': 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    // console.log('working!');
    return this.http.get(this.mutUrl, { headers: headers });
  }

}
