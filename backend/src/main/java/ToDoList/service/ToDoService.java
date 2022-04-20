package ToDoList.service;

import ToDoList.domain.entity.ToDo;
import ToDoList.dto.ToDoRequest;
import ToDoList.repository.ToDoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ToDoService {
    private final ToDoRepository toDoRepository;

    //리스트 추가
    public ToDo saveList(ToDoRequest toDoRequest){
        ToDo toDo = new ToDo();
        toDo.setContent(toDoRequest.getContent());
        toDo.setIsClicked(toDo.getIsClicked());

        return toDoRepository.save(toDo);
    }

    //전체 리스트 출력
    public List<ToDo> getListAll(){
        return toDoRepository.findAll();
    }

    //리스트 수정
    public ToDo updateById(Long id, ToDoRequest toDoRequest){
         ToDo toDo = new ToDo();

         if(toDoRequest.getContent() != null) // 수정 값 있다면
         {
             toDo.setContent(toDoRequest.getContent());
         }

        return toDoRepository.save(toDo);
    }

    //리스트 삭제
    public void deleteById(Long id){
        toDoRepository.deleteById(id);
    }


}
