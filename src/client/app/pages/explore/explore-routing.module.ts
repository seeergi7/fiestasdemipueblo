import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExploreComponent } from './explore.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'explore', component: ExploreComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
