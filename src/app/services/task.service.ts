import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Task } from '../models/Task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksUrl: string = 'https://jsonplaceholder.typicode.com/todos'
  tasksLimit: string = '?_limit=5'

  constructor(private http: HttpClient) {}

  // Add task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions)
  }

  // Get tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.tasksUrl}${this.tasksLimit}`)
  }

  // Delete task
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`
    return this.http.delete<Task>(url, httpOptions)
  }

  // Toggle Completed
  toggleCompleted(task: Task): Observable<any>{
    const url = `${this.tasksUrl}/${task.id}`
    return this.http.put(url, task, httpOptions)
  }
}
