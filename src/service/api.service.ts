import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(public httpClient: HttpClient) {}

  // public get(getUrl: string): Observable<any> {
  //   return this.httpClient.get(getUrl);
  // }
  get(url: string, urlParams?: HttpParams): Observable<any> {
    return this.httpClient.get(url, {
      params: urlParams,
    });
  }
  post(url: string, body: Object): Observable<any> {
    return this.httpClient.post(url, body);
  }

  patch(url: string, body: Object): Observable<any> {
    return this.httpClient.patch(url, body);
  }

  put(url: string, body: Object): Observable<any> {
    return this.httpClient.put(url, body);
  }

  delete(url: string, urlParams?: HttpParams): Observable<any> {
    return this.httpClient.delete(url, {
      params: urlParams,
    });
  }
}
