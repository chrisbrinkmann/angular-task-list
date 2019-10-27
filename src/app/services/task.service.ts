import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return [
      {
        id: 1,
        title: 'First task',
        completed: false
      },
      {
        id: 2,
        title: 'Second task',
        completed: false
      },
      {
        id: 3,
        title: 'Third task',
        completed: false
      }
    ]
  }
}
