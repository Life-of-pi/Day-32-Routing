import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogList2Component } from './blog-list2/blog-list2.component';
import { BlogList3Component } from './blog-list3/blog-list3.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent

  },
  {
    path: 'blog1',
    component: BlogListComponent
  },
  {
    path: 'blog2',
    component: BlogList2Component
  },
  {
    path: 'blog3',
    component: BlogList3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
