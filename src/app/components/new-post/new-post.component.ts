import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private pstSrv: PostsService, private router: Router) { }


  ngOnInit(): void {
    console.log(this.currentDate)
    console.log(this.fullDate)

  }

  currentDate: Date = new Date();
 fullDate = `${this.currentDate.getDate()}-${(this.currentDate.getMonth() + 1)}-${this.currentDate.getFullYear()}`

  newPost = {
    title: '',
    body: '',
    category: '',
    date: this.fullDate,
    subtitle: ''
  }

    create(form: NgForm) {
      console.log(form.value)
      this.pstSrv.createPost(form.value).subscribe((res: any) => {
        this.router.navigate(['/posts']);
      })
    }
}
