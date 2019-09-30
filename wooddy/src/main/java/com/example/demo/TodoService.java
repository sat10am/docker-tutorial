package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }

    public Todo getTodo(Long id) {
        return todoRepository.findTodoById(id);
    }

    public List<Todo> getTodoList() {
        return todoRepository.findAll();
    }

    public void deleteTodoById(Long id) {
        todoRepository.deleteById(id);
    }
}
