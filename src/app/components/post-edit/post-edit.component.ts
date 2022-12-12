import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private pstSrv: PostsService, private router: Router) { }

  p: Post | undefined


  ngOnInit(): void {
    let x = this.ar.snapshot.params["id"];
    this.pstSrv.getPosts().subscribe((posts: Post[]) => {
      this.p = posts.find((element) => {
        if(x == element.id) {
          console.log(element);
          return true;
        } else {
          return false;
        }
      })
    })
  }

    update(form: NgForm) {
    console.log(this.p)
      let post: Post = {
        id: this.p!.id,
        title: this.p!.title,
        body: this.p!.body,
        date: this.p!.date,
        author: this.p!.author
      }
      console.log(post)
      this.pstSrv.updatePost(post).subscribe((data) => {
        console.log(data);

      })
      this.router.navigate(['/posts']);
    }
  }

