import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../todo.service'
import { ToDo } from '../todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent  {

  toDo: ToDo;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private todoService: ToDoService) {
    this.toDo = new ToDo();
  }

  onSubmit() {
    this.todoService.save(this.toDo).subscribe(result => this.gotoList());
  }

  gotoList() {
    this.router.navigate(['/tasks']);
  }
}
