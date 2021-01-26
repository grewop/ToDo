package todo.repository;


import todo.model.ToDo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ToDoRepository extends CrudRepository<ToDo, Long> {

}