// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './views/signup/signup.component';
import { TextInputComponent } from './components/shared/text-input/text-input.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { PasswordValidatorComponent } from './components/password-validator/password-validator.component';
import { EmailValidatorComponent } from './components/email-validator/email-validator.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContainerComponent } from './components/shared/container/container.component';
import { SectionComponent } from './components/shared/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TextInputComponent,
    ButtonComponent,
    PasswordValidatorComponent,
    EmailValidatorComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ContainerComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
