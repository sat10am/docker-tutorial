package com.example.demo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.apache.ibatis.annotations.Select;
import org.springframework.data.annotation.PersistenceConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
public class Todo {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String message;

    public Todo() {
    }

    public Todo(String title, String message) {
        this.title = title;
        this.message = message;
    }

    public static Todo createTemp() {
        return new Todo("temp title", "temp message");
    }
}
