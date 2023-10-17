import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './shared/components/post/post.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AddpostComponent } from './shared/components/addpost/addpost.component';

const routes: Routes = [
  {path:"" , component: PostComponent},
  {path:"posts" , component: PostComponent},
  {path:"addPost" , component: AddpostComponent},
  {path:'page-not-found' , component:PageNotFoundComponent},
  {path: "**" ,  redirectTo:"page-not-found"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
