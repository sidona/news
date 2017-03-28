import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ExchangeService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http:Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json,application/xml',
      'Accept': 'application/json, application/xml' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  createService(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
      .post(url, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  readService(url: string): Observable<any> {
    return this.http
      .get('https://api.rss2json.com/v1/api.json?rss_url=' +url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
