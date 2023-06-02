import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistartionFormComponent } from './registartion-form/registartion-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component'
import { registerLocaleData } from '@angular/common';
import localeFrench from '@angular/common/locales/fr'
import localeIndia from '@angular/common/locales/bn-IN';
import { SortPipePipe } from './sort-pipe.pipe';
import { Login1Component } from './login1/login1.component';
import { CustomDirective } from './custom.directive';
import { PerfectDirective } from './perfect.directive';
import { UnlessDirective } from './unless.directive';
import { HomeComponent } from './home/home.component';

registerLocaleData(localeFrench);

@NgModule({
  declarations: [
    AppComponent,
    RegistartionFormComponent,
    LoginComponent,
    PipeDemoComponent,
    SortPipePipe,
    Login1Component,
    CustomDirective,
    PerfectDirective,
    UnlessDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
