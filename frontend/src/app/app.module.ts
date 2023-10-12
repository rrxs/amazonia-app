import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherGithub, featherChevronsDown } from '@ng-icons/feather-icons';
import { HeroComponent } from './components/hero/hero.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CalculateRouteComponent } from './components/calculate-route/calculate-route.component';
import { CalculateFormComponent } from './components/calculate-route/calculate-form/calculate-form.component';
import { CalculateResultComponent } from './components/calculate-route/calculate-result/calculate-result.component';
import { CalculateLatestsComponent } from './components/calculate-route/calculate-latests/calculate-latests.component';
import { DroneService } from './services/drone.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    CustomersComponent,
    CalculateRouteComponent,
    CalculateFormComponent,
    CalculateResultComponent,
    CalculateLatestsComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ featherGithub, featherChevronsDown }),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DroneService],
  bootstrap: [AppComponent],
})
export class AppModule {}
