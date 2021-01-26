import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './todo';

@Injectable()
export class ToDoService {
   private baseUrl = 'http://localhost:8080';
   private todosUrl: string;

    constructor(private http: HttpClient) {
      this.todosUrl = 'http://localhost:8080/tasks';  //port Tomcat
    }

    public findAll(): Observable<ToDo[]> {
      return this.http.get<ToDo[]>(this.todosUrl);
    }

    public save(toDo: ToDo) {
      return this.http.post<ToDo>(this.todosUrl, toDo);
    }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
