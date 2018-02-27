import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './route/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './modules/header/header.component';
import { DrawerComponent } from './modules/drawer/drawer.component';
import { OrderComponent } from './components/order/order.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { PredictionsComponent } from './components/predictions/predictions.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { TodayComponent } from './components/today/today.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MenusectionComponent } from './modules/menusection/menusection.component';
import { OrderviewComponent } from './modules/orderview/orderview.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    DrawerComponent,
    OrderComponent,
    AnalysisComponent,
    PredictionsComponent,
    ReviewsComponent,
    TodayComponent,
    MenuComponent,
    SettingsComponent,
    MenusectionComponent,
    OrderviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
