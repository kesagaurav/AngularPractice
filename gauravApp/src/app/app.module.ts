import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { RepeatDirective } from './repeat.directive';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import localFrench from "@angular/common/locales/fr";
import { GauravPipe } from './gaurav.pipe';
import { RegistrationFormComponent } from './registration-form/registration-form.component'

@NgModule({
  declarations: [
    AppComponent,
    RepeatDirective,
    GauravPipe,
    RegistrationFormComponent,
    //HelloComponent
  ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}




function registerLocalData(localFrench: any) {
  throw new Error("Function not implemented.");
}

