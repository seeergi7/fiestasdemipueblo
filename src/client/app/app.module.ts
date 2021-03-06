import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AccountModule } from './pages/account/account.module';
import { HomeModule } from './pages/home/home.module';
import { CitiesModule } from './pages/cities/cities.module';
import { ExploreModule } from './pages/explore/explore.module';

// Shared
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    AccountModule,
    HomeModule,
    CitiesModule,
    ExploreModule
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
