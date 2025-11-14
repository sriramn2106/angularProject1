import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentsList {

  comment_Url='https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient ){

  }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.comment_Url)
  }
}
