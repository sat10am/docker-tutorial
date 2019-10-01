package study.sat10am.dockertodo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import study.sat10am.dockertodo.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
