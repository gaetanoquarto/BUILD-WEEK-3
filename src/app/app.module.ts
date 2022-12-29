import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilteredPlaystationComponent } from './components/filtered/filtered-playstation/filtered-playstation.component';
import { FilteredXboxComponent } from './components/filtered/filtered-xbox/filtered-xbox.component';
import { FilteredPcComponent } from './components/filtered/filtered-pc/filtered-pc.component';
import { FilteredNintendoComponent } from './components/filtered/filtered-nintendo/filtered-nintendo.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostEditComponent,
    PostDetailsComponent,
    NewPostComponent,
    FooterComponent,
    FilteredPlaystationComponent,
    FilteredXboxComponent,
    FilteredPcComponent,
    FilteredNintendoComponent,
    CommentsComponent,
    ProfileComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
