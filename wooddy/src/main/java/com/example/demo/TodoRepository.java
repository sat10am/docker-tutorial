package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface TodoRepository extends JpaRepository<Todo, Long> {
    Todo findTodoById(Long id);
}
