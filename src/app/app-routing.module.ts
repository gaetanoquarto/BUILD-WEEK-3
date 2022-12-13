import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PlaystationComponent } from './components/categories/playstation/playstation.component';
import { PcComponent } from './components/categories/pc/pc.component';
import { XboxComponent } from './components/categories/xbox/xbox.component';
import { NintendoComponent } from './components/categories/nintendo/nintendo.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'posts/:id/edit',
    component: PostEditComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
  {
    path: 'category/pc',
    component: PcComponent
  },
  {
    path: 'category/xbox',
    component: XboxComponent
  },
  {
    path: 'category/playstation',
    component: PlaystationComponent
  },
  {
    path: 'category/nintendo',
    component: NintendoComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
