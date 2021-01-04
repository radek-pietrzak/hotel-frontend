import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {BookingComponent} from './booking/booking.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const routes: Routes = [{
  component: HomeComponent,
  path: 'home'
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  component: ContactComponent,
  path: 'contact'
}, {
  component: BookingComponent,
  path: 'booking'
}, {
  component: RegisterComponent,
  path: 'register'
}, {
  component: LoginComponent,
  path: 'login'
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
