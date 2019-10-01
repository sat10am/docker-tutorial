package study.sat10am.dockertodo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import study.sat10am.dockertodo.model.dto.TodoDto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    @NotEmpty
    private String job;

    @NotNull
    @DateTimeFormat
    private LocalDateTime startedAt;

    @NotNull
    @DateTimeFormat
    private LocalDateTime endedAt;

    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createAt;

    public Todo(String job, LocalDateTime startedAt, LocalDateTime endedAt) {
        this.job = job;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
        this.createAt = LocalDateTime.now();
    }

    public void update(Todo newTodo) {
        this.job = newTodo.job;
        this.startedAt = newTodo.startedAt;
        this.endedAt = newTodo.endedAt;
    }

    public String location() {
        return "/todo/" + this.id;
    }

    public TodoDto toDto() {
        return TodoDto.builder()
                .job(this.job)
                .startedAt(this.startedAt)
                .endedAt(this.endedAt)
                .build();
    }

}
