package todo.controller;

import todo.model.ToDo;
import todo.repository.ToDoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") //port angular
public class ToDoController {

    // standard constructors


    public ToDoController(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    private final ToDoRepository toDoRepository;

    @GetMapping(value = "/tasks")
    public List<ToDo> getUsers() {
        return (List<ToDo>) toDoRepository.findAll();
    }

    @PostMapping(value = "/tasks")
    void addUser(@RequestBody ToDo toDo) {
        toDoRepository.save(toDo);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        toDoRepository.deleteById(id);
    }
}