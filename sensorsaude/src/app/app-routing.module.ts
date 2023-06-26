import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EstablishmentListComponent } from './components/pages/establishment-list/establishment-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'establishment-list',
    pathMatch: 'full'
  },
  {
    path: 'establishment-list',
    component: EstablishmentListComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
