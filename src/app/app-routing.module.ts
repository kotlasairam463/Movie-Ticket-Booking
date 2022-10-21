import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BookticketComponent } from './components/bookticket/bookticket.component';
import { BookingsuccessComponent } from './components/bookingsuccess/bookingsuccess.component';
import { AdmintasksComponent } from './components/admintasks/admintasks.component';
import { BookingsComponent } from './components/bookings/bookings.component';
const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'bookticket/:id',component:BookticketComponent},
  {path:'bookingsuccess',component:BookingsuccessComponent},
  {path:'admintasks',component:AdmintasksComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'',redirectTo:'\movies',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
