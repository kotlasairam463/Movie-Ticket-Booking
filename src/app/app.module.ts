import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BookticketComponent } from './components/bookticket/bookticket.component';
import { FormsModule } from '@angular/forms';
import { BookingsuccessComponent } from './components/bookingsuccess/bookingsuccess.component';
import { AdmintasksComponent } from './components/admintasks/admintasks.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BookingsComponent } from './components/bookings/bookings.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    RegisterComponent,
    PagenotfoundComponent,
    BookticketComponent,
    BookingsuccessComponent,
    AdmintasksComponent,
    BookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
