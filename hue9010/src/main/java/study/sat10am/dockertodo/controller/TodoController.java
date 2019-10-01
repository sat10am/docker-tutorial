package study.sat10am.dockertodo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import study.sat10am.dockertodo.model.Todo;
import study.sat10am.dockertodo.model.dto.TodoDto;
import study.sat10am.dockertodo.service.TodoService;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("todo")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public ResponseEntity<List<TodoDto>> findAll() {
        return ResponseEntity.ok(
                todoService.findAll()
                        .stream()
                        .map(Todo::toDto)
                        .collect(Collectors.toList())
        );
    }

    @PostMapping
    public ResponseEntity save(@Valid @RequestBody TodoDto todoDto) {
        return ResponseEntity.created(
                URI.create(todoService.save(todoDto.toTodo()))
        ).build();
    }

    @PutMapping("/{id}")
    public void update(@PathVariable Long id,
                       @Valid @RequestBody TodoDto todoDto) {
        todoService.update(id, todoDto.toTodo());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        todoService.delete(id);
        return ResponseEntity.ok().build();

    }
}
