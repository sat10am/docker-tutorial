package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {

    @Autowired
    TodoService todoService;

    @PostMapping("/todo")
    public Todo addTodo(@RequestBody Todo todo) {
        todoService.addTodo(todo);
        return todo;
    }

    @GetMapping("/todo")
    public List<Todo> getTodoList() {
        return todoService.getTodoList();
    }

    @GetMapping("/todo/{id}")
    public Todo getTodo(@PathVariable Long id) {
        return todoService.getTodo(id);
    }

    @DeleteMapping("/todo/{id}")
    public Long deleteTodoById(@PathVariable Long id) {
        todoService.deleteTodoById(id);
        return id;
    }
}
