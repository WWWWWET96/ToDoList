package ToDoList.dto;

import ToDoList.domain.entity.ToDo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ToDoResponse {
    private Long id;
    private String content;
    private boolean isClicked;


    public ToDoResponse(ToDo toDo){
        this.id = toDo.getId();
        this.content = toDo.getContent();
        this.isClicked = toDo.getIsClicked();

    }
}
