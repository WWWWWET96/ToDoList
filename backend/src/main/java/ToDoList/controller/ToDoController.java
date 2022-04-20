package ToDoList.controller;

import ToDoList.dto.ToDoResponse;
import ToDoList.service.ToDoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@AllArgsConstructor
public class ToDoController {

    private final ToDoService toDoService;

    @GetMapping("/")
    public ResponseEntity<ToDoResponse> getListAll() {
        System.out.println("show all");
        return null;
    }

    @PostMapping("/")
    public ResponseEntity<ToDoResponse> save(){
        System.out.println("saved completely");
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        System.out.println("Delete");
        return null;
    }


}
