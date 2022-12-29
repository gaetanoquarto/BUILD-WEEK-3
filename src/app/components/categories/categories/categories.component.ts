import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private pstSrv: PostsService, private route: ActivatedRoute) { }

    logged = false;
    page = 1;
    sub: Subscription | undefined
    posts: Post[] | undefined
    categoria: any

    ngOnInit(): void {
      this.route.snapshot.url.forEach((segment) => {
        if (segment.path === 'pc') {
          this.sub = this.pstSrv.getCategoryPosts('pc').subscribe((post) => {
            this.posts = post;
            this.categoria = 'Pc'
        })
        } else if (segment.path === 'playstation') {
          this.sub = this.pstSrv.getCategoryPosts('playstation').subscribe((post) => {
            this.posts = post;
            this.categoria = 'Playstation'
        })
        } else if (segment.path === 'nintendo') {
          this.sub = this.pstSrv.getCategoryPosts('nintendo').subscribe((post) => {
            this.posts = post;
            this.categoria = 'Nintendo'
        })
        } else if (segment.path === 'xbox') {
          this.sub = this.pstSrv.getCategoryPosts('xbox').subscribe((post) => {
            this.posts = post;
            this.categoria = 'Xbox'
        })
        }
      });
      const value = localStorage.getItem('user');
      if(value) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    }

}
