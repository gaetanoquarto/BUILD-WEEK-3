import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.interface';
@Component({
  selector: 'app-filtered-nintendo',
  templateUrl: './filtered-nintendo.component.html',
  styleUrls: ['./filtered-nintendo.component.scss']
})
export class FilteredNintendoComponent implements OnInit {

  sub!: Subscription;
  lastPost: Post[] | undefined;
  notLastPosts: Post[] | undefined

  constructor(private pstSrv: PostsService) { }

  ngOnInit(): void {
      this.getLastThreeNintendo();
  }

  getLastThreeNintendo() {
      this.sub = this.pstSrv.getCategoryPosts('nintendo').subscribe((post) => {
          this.lastPost = post.slice(-1).reverse();
          this.notLastPosts = post.slice(-3, -1).reverse();
      })
  }

}
