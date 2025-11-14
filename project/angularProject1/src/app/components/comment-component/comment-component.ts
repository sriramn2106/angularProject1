import { Component } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-component',
  imports: [],
  templateUrl: './comment-component.html',
  styleUrl: './comment-component.css',
})
export class CommentComponent {
 commentList: Comment[] =[];

  constructor(public ob: CommentService) {
    this.ob.getAllComments().subscribe((response: Comment[]) => {
      this.commentList = response;
      console.log(this.commentList);
    });
  }
}
