import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities.component';
import { CitiesRoutingModule } from './cities-routing.module';

@NgModule({
  imports: [CommonModule, CitiesRoutingModule],
  declarations: [CitiesComponent],
  exports: [CitiesComponent]
})
export class CitiesModule { }
