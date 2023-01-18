import { PumpMaster } from './../model/pump-master';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PumpMasterService {
  public pumpMasterUrl: string = environment.apiPumpMaster;

  constructor(private http: HttpClient) {}

  pumpMasterSaveService(pumpMaster: PumpMaster) {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const body = JSON.stringify(pumpMaster);
    return this.http.post(this.pumpMasterUrl, body, { headers: headers });
  }

  pumpMasterGetService() {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    return this.http.get(this.pumpMasterUrl, { headers: headers });
  }

  pumpMasterDeleteService(id: any) {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.pumpMasterUrl, { headers: headers, params });
  }

  pumpMasterUpdateService(data: any) {
    const headers = {
      'content-type': 'application/json',
      'pkey': '3fdfabc1bcc185d03fe95d7e7dc9803d',
      'apikey': 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const body = JSON.stringify(data);
    console.log(body, 'sss');
    return this.http.put(this.pumpMasterUrl + `/${data.id}`, body, {
      headers: headers,
    });
  }
}
