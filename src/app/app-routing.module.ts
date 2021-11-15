import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';

const routes: Routes = [
  {path:'',component:TopheadingsComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BusinessNewsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
