package ToDoList.controller;

import ToDoList.dto.PostDto;
import ToDoList.dto.response.PostResponse;
import ToDoList.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/api/post")
public class PostController {

    private final PostService postService;

    //list 생성
    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto request){
        PostDto response = postService.savePost(request);
        return ResponseEntity.ok(response);
    }

    //전체 조회
    @GetMapping
    public ResponseEntity <List<PostResponse>> getListAll() {
        List<PostResponse> responses = postService.getListAll();
        return ResponseEntity.ok(responses);
    }

    //사용자에 따른 todolist 이동
    @GetMapping("/{id}")
    public ResponseEntity<List<PostResponse>> goTodobyId(@PathVariable Long id){
        List<PostResponse> responses = postService.goTodo(id);
        return ResponseEntity.ok(responses);
    }

    //list 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id){
        postService.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
