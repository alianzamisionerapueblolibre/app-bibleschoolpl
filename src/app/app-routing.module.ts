import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/views/default/default.component';
import { FullWidthComponent } from './layout/views/full-width/full-width.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      {
        path: 'index',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  // {
  //   path: '', component: FullWidthComponent,
  //   children: [
  //     { path: '', redirectTo: '/login', pathMatch: 'full' },
  //     {
  //       path: 'login',
  //       loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  //     }
  //   ]
  // }
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
