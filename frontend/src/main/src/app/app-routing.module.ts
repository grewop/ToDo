import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './todolist/todolist.component';
import { ToDoComponent } from './todo/todo.component';



const routes: Routes = [
  { path: 'tasks', component: ToDoListComponent },
  { path: 'addtask', component: ToDoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
