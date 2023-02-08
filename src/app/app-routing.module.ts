import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GreetingDetailComponent } from './greeting-detail/greeting-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'greetings', component: GreetingComponent },
  { path: 'detail/:id', component: GreetingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
