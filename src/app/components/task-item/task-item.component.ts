import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { Task } from '../../models/Task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter()

  constructor(private taskService:TaskService) {}

  ngOnInit() {}

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
    // Toggle in UI
    task.completed = !task.completed

    // Toggle on server
    this.taskService.toggleCompleted(task).subscribe(task => {
      console.log(task)
    })
  }

  onDelete(task) {
    this.deleteTask.emit(task)
  }
}
