import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherGithub } from '@ng-icons/feather-icons';
import { HeroComponent } from './components/hero/hero.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CalculateRouteComponent } from './components/calculate-route/calculate-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    CustomersComponent,
    CalculateRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ featherGithub }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
