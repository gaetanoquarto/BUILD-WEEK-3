import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private pstSrv: PostsService) { }

  page = 1;
  sub: Subscription | undefined
  posts: Post[] | undefined

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.sub = this.pstSrv.getPosts().subscribe((post) => {
      this.posts = post;
      console.log(post)
    })
  }

  deletePost(id: number) {
    this.sub = this.pstSrv.deletePost(id).subscribe(() => {
      this.posts = this.posts?.filter(post => post.id !== id);
    })
  }
}
