import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  id:any= '';
  movies:any='';
  movie:any='';
  movietime:string="";
  tickets:Number=0;
  Ticketscheck:string="0";
  constructor(private http:HttpService,private rout:Router,private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.http.getMoviesData().subscribe( res=> {
      this.movies =res;
      let index =this.movies.findIndex((movie:{id : string}) =>movie.id == this.id);
      this.movie = this.movies[index];
      this.Ticketscheck = this.movie.ticketsavail;
    })
  }
 
 bookingForm(myForm:NgForm,movieid:any){
      let remainingTickets = (this.movie.ticketsavail)-(myForm.value.TotalTickets);;
      const updatemoviedata =  { 
      ticketsavail:remainingTickets,
      id:this.id
      };

      this.http.updateData(movieid,updatemoviedata).subscribe(x => {
        console.log('updated sucessfully');
      });
      

      let keyValue = myForm.value.username;
      let userdetails={'Username':myForm.value.username,'Mobileno':myForm.value.mobile,'Moviename':this.movie.movie_name,'Bookedtickets':myForm.value.TotalTickets,'Showtime':myForm.value.MovieTime,'Date':myForm.value.date};
      this.http.addbooked(userdetails).subscribe((data:any) => console.log(data));
      localStorage.setItem(keyValue,JSON.stringify(userdetails));
      console.log('localstorage',localStorage.getItem(keyValue));
      this.rout.navigate(['/bookingsuccess']);   
  }
   
}
