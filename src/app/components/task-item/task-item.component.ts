import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task

  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      task: true,
      'is-complete': this.task.completed
    }
    return classes
  }

  // methods
  onToggle(task) {
    task.completed = !task.completed
  }

  onDelete(task) {
    console.log('delete')
  }

}
