package ToDoList.dto;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ToDoRequest {
    private String content;
    private boolean isClicked;
}
