import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../todo.service'
import { ToDo } from '../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class ToDoListComponent implements OnInit {


  todos: ToDo[];

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.todoService.findAll().subscribe(data => {
      this.todos = data;
    });
  }
deleteTask(id) {
this.todoService.deleteEmployee(id).subscribe(result => this.reloadData());

  }
   reloadData(): void {
    window.location.reload();
    }
}
