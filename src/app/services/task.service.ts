import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Task } from '../models/Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  tasksLimit:string = '?_limit=5'

  constructor(private http: HttpClient) {}

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(`${this.tasksUrl}${this.tasksLimit}`)
  }
}
