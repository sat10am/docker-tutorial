package study.sat10am.dockertodo.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import study.sat10am.dockertodo.model.Todo;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto {
    private String job;

    @NotNull
    @JsonFormat
    private LocalDateTime startedAt;

    @NotNull
    @JsonFormat
    private LocalDateTime endedAt;

    public Todo toTodo() {
        return new Todo(this.job, this.startedAt, this.endedAt);
    }
}
