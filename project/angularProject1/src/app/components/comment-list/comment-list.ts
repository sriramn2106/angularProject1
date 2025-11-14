
import { Component } from '@angular/core';
import { CommentsList } from '../../services/comments-list';
import { Comment } from '../../services/comment';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentArr: Comment[] = []
  constructor(private commentsList: CommentsList){

  }
  ngOnInit(){
    this.commentsList.getComments().subscribe((response: Comment[])=>{
      this.commentArr=response
    })
  }

}
