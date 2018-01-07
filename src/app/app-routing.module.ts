import { NgModule } from '@angular/core';
import { ChildResolverService } from './child-resolver.service';
import { AuthGuard } from './auth.guard';
import { ChildComponent } from './child/child.component'
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { Routes, RouterModule } from '@angular/router';
import { MultiComponent } from './multi/multi.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'detail',
    pathMatch: 'full'
  },
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
        data: {
          title: '詳細ページ'
        },
        children: [
          {
            path: ':id', component: ChildComponent, resolve: {
              message: ChildResolverService
            }
          }
        ]
      }
    ]
  },
  {
    path: 'multi',
    component: MultiComponent,
    outlet: 'subOutlet'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
