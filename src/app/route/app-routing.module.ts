import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }      from '../components/login/login.component';
import { DashboardComponent }      from '../components/dashboard/dashboard.component';
import { OrderComponent }      from '../components/order/order.component';
import { AnalysisComponent}      from '../components/analysis/analysis.component';
import { MenuComponent}      from '../components/menu/menu.component';
import { PredictionsComponent }      from '../components/predictions/predictions.component';
import { SettingsComponent }      from '../components/settings/settings.component';
import { TodayComponent }      from '../components/today/today.component';
import { ReviewsComponent }      from '../components/reviews/reviews.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order', component: OrderComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'predictions', component: PredictionsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'today', component: TodayComponent },
  { path: 'reviews', component: ReviewsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
