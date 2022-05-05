package ToDoList.domain.entity;

import ToDoList.dto.PostDto;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
@Entity
@Getter
@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", length = 20, nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private User user;

    public Post(Long id, String content, User user) {
        this.id = id;
        this.content = content;
        this.user = user;
    }

    static public Post of(PostDto postDto){
        return new Post(
                postDto.getId(),
                postDto.getContent(),null
        );
    }
}
