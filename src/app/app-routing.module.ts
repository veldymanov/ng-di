import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/feature-one' },
  {
    path: 'lazy-feature-one',
    loadChildren: () => import('./lazy-loaded/lazy-feature-one/lazy-feature-one.module').then(m => m.LazyFeatureOneModule)
  },
  {
    path: 'lazy-feature-two',
    loadChildren: () => import('./lazy-loaded/lazy-feature-two/lazy-feature-two.module').then(m => m.LazyFeatureTwoModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // {
    //   // enableTracing: true, // <-- debugging purposes only
    //   preloadingStrategy: PreloadAllModules // SelectivePreloadingStrategy
    // }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
