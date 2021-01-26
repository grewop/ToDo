package todo;

import todo.model.ToDo;
import todo.repository.ToDoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class Application   {


    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(ToDoRepository toDoRepository) {
        return args -> {
            Stream.of("Wake Up", "Call work", "Go to the doctor", "Go shopping").forEach(name -> {
                ToDo toDo = new ToDo(name);
                toDoRepository.save(toDo);
            });
            toDoRepository.findAll().forEach(System.out::println);
        };
    }

}