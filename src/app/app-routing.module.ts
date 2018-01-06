import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component'
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'detail',
        component: DetailComponent,
        children:[
          { path: 'child', component: ChildComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
