import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MaterialGrade } from '../model/material-grade';

@Injectable({
  providedIn: 'root',
})
export class MaterialGradeService {
  public materialGradeUrl: string = environment.apiMaterialGradeUrl;

  constructor(private http: HttpClient) {}

  materialGradePostService(materialGrade: MaterialGrade) {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const body = JSON.stringify(materialGrade);
    console.log(materialGrade, 'success');
    return this.http.post(this.materialGradeUrl, body, { headers: headers });
  }

  materialGradeGetService() {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    return this.http.get(this.materialGradeUrl, { headers: headers });
  }

  materialGradeDeleteService(id: any) {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.materialGradeUrl, {
      headers: headers,
      params,
    });
  }

  materialGradeUpdateService(data: any) {
    const headers = {
      'content-type': 'application/json',
      pkey: '3fdfabc1bcc185d03fe95d7e7dc9803d',
      apikey: 'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX',
    };
    const body = JSON.stringify(data);
    console.log(body, 'ccccc');
    return this.http.put(this.materialGradeUrl + `/${data.id}`,body,{'headers': headers});
  }
}
