import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingDetailComponent } from './greeting-detail/greeting-detail.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { GreetingSearchComponent } from './greeting-search/greeting-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    GreetingDetailComponent,
    HeaderComponent,
    HomeComponent,
    MessagesComponent,
    DashboardComponent,
    GreetingSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
