import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpClient: HttpClient) {
  }
  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.url, { observe: "body" }).pipe(
      map((res: Comment[]) => {
        return res.map((item: Comment) => {
          return new Comment(item.id,item.postId,item.name,item.email,item.body);
        });
      })
    );
  }
}
