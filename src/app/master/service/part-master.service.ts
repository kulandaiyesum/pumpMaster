import { PartMaster } from './../model/part-master';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PartMasterService {
  public partMasterUrl: string = environment.apiPumpPart;
  constructor(private http: HttpClient) {}

  partSaveService(partMaster: PartMaster) {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const body = JSON.stringify(partMaster);
    return this.http.post(this.partMasterUrl, body, { headers: headers });
  }
  partGetService() {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    return this.http.get(this.partMasterUrl, { headers: headers });
  }

  partDeleteService(id: any) {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.partMasterUrl, { headers: headers, params });
  }

  partUpdateService(data: any) {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const body = JSON.stringify(data);
    console.log(body, 'yyy');
    return this.http.put(this.partMasterUrl + `/${data.id}`, body, {
      'headers': headers,
    });
  }
}
