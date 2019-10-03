package study.sat10am.dockertodo.service;

import org.springframework.stereotype.Service;
import study.sat10am.dockertodo.Repository.TodoRepository;
import study.sat10am.dockertodo.model.Exception.NotExistTodoException;
import study.sat10am.dockertodo.model.Todo;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    public String save(Todo todo) {
        return todoRepository.save(todo).location();
    }

    public void update(Long id, Todo newTodo) {
        Todo todo = todoRepository.findById(id).orElseThrow(NotExistTodoException::new);

        todo.update(newTodo);
        todoRepository.save(todo);
    }

    public void delete(Long id) {
        todoRepository.deleteById(id);
    }


}
