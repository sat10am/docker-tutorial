package study.sat10am.dockertodo.model.Exception;

public class NotExistTodoException extends RuntimeException{
    public NotExistTodoException() {
        new NotExistTodoException("id가 존재하지 않습니다.");
    }

    public NotExistTodoException(String message) {
        super(message);
    }
}
