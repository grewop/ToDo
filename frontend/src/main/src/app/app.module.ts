import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { ToDoComponent } from './todo/todo.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToDoService } from './todo.service';



@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent,


  ],
  imports: [
   FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ToDoService],
   bootstrap: [AppComponent]
})
export class AppModule { }
