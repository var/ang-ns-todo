import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://5d1cc160f31e7f00147ebab6.mockapi.io/api/poc/ang-ns-todo/todo');
  }
}
