import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 
  movieslist:any[]= [];

  constructor(private http:HttpService, private router:Router,private ActivatedRoute:ActivatedRoute) { }
   ngOnInit() {
    this.http.getMoviesData().subscribe( data => {
      this.movieslist = data;
    },
    err => { console.log("err occured:", err)
    }
    )

   
  }
  call(id:string){
    this.router.navigate(['/bookticket/'+id],);
  }
 
 
  }
