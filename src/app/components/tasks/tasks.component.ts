import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }

  deleteTask(task: Task) {
    // Delete from UI
    this.tasks = this.tasks.filter(t => t.id !== task.id)

    // Delete from server
    this.taskService.deleteTask(task).subscribe()
  }

}
