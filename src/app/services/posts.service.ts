import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://6396f0fd77359127a027315e.mockapi.io/posts');
  }

  deletePost(id: number) {
    return this.http.delete(`https://6396f0fd77359127a027315e.mockapi.io/posts/${id}`)
  }

  updatePost(post: Post) {
    return this.http.put<Post>(`https://6396f0fd77359127a027315e.mockapi.io/posts/${post.id}`, post);
  }

  createPost(post: Post) {
    return this.http.post(`https://6396f0fd77359127a027315e.mockapi.io/posts/`, post);
  }

}
