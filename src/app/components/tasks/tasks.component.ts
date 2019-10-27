import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]

  constructor() { }

  ngOnInit() {
    this.tasks = [
      {
        id: 1,
        title: 'First task',
        completed: false
      },
      {
        id: 2,
        title: 'Second task',
        completed: true
      },
      {
        id: 3,
        title: 'Third task',
        completed: false
      }
    ]
  }

}
