import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() {
    const headers = new HttpHeaders()
        .set('Authorization', 'KINVEY_TOKE_HERE')
        .set('X-Kinvey-API-Version', '3');
    return this.http.get('https://baas.kinvey.com/appdata/kid_rJKcg-0-B/todo', {headers});
  }
}
