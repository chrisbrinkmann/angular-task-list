import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { TaskItemComponent } from './components/task-item/task-item.component'

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
