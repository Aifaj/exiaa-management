import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoaderComponent } from '../shared/loader/loader.component';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  static NodeGetAllExamByClassAndSubject(NodeGetAllExamByClassAndSubject: any, classId: any, subjectId:any) {
    throw new Error('Method not implemented.');
  }

  baseUrl = environment.url;

  constructor(private http: HttpClient, private loaderService: LoaderService) {
  }

  async post(url: string, body: any, contentType = 'application/json'): Promise<any> {
    return this.http.post(this.baseUrl + url, body, this.getHeaders(contentType)).toPromise()
      .then((response) => {
        return Promise.resolve(response)
      }).catch((e) => {
        return Promise.reject(e)
      })

  }

  async get(url: string, contentType = 'application/json'): Promise<any> {
    return this.http.get(this.baseUrl + url, this.getHeaders(contentType)).toPromise()
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((e) => {
        return Promise.reject(e);
      })
  }

  put(url: string, contentType = 'application/json'): Promise<any> {
    return this.http.put(this.baseUrl + url, this.getHeaders(contentType)).toPromise();
  }

  async postFormData(url: string, body: any, contentType = 'multipart/form-data'): Promise<any> {
    return this.http.post(this.baseUrl + url, body, this.getFormHeaders(contentType)).toPromise()
      .then((response) => {
        return Promise.resolve(response)
      }).catch((e) => {
        return Promise.reject(e)
      })

  }

  getToken() {
    if (localStorage.getItem('user')) {
      let currentUser = JSON.parse(localStorage.getItem('user') || '{}');
      return currentUser.authToken;
    } else {
      return " ";
    }
  }

  private getHeaders(contentType: string): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': contentType,
        'Accept': 'application/json',
      })
    };
  }

  private getFormHeaders(contentType: string): any {
    return {
      headers: new HttpHeaders({
        // 'Content-Type': contentType,
        // 'Accept': 'application/json, text/plain, */*',
      })
    };
  }
}
