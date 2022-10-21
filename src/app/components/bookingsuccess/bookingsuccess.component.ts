import { Component, OnInit,Input} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookingsuccess',
  templateUrl: './bookingsuccess.component.html',
  styleUrls: ['./bookingsuccess.component.css']
})
export class BookingsuccessComponent implements AfterViewInit {
 
  displayedColumns: string[] = ['id', 'Username', 'Mobileno', 'Moviename','Bookedtickets','Showtime','Date'];
  dataSource :any;
  constructor(private http:HttpService, private router:Router) { }

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    
   this.http.getbookeddetails().subscribe((data: any[]) =>
      {
        this.dataSource=data;
       console.log(this.dataSource);
      },
       (err: any) => { console.log("err occured:", err)
     }) 
     this.dataSource.paginator=this.paginator;   
    } 
  }