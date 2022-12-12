import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import {ActivatedRoute} from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private pstSrv: PostsService) { }

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

}
