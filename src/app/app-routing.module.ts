import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'timeline',
    loadChildren: () => import('./timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'check-location',
    loadChildren: () => import('./check-location/check-location.module').then( m => m.CheckLocationPageModule)
  },
  {
    path: 'check-location3/:place',
    loadChildren: () => import('./check-location3/check-location3.module').then( m => m.CheckLocation3PageModule)
  },
  {
    path: 'timeline-end',
    loadChildren: () => import('./timeline-end/timeline-end.module').then( m => m.TimelineEndPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
