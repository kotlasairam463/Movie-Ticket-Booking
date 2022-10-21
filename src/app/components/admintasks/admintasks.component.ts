import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';
import { NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admintasks',
  templateUrl: './admintasks.component.html',
  styleUrls: ['./admintasks.component.css']
})
export class AdmintasksComponent implements OnInit {
  id:any= '';
  movies:any='';
  movie:any='';
  addMovieForm = new FormGroup({
    movie_name: new FormControl(''),
    img_link: new FormControl(''),
    ticketsavail:new FormControl('')
  });
  editForm = new FormGroup({
    movie_name: new FormControl(''),
    ticketsavail:new FormControl('')
  });
  deleteForm = new FormGroup({
    movie_name: new FormControl('')
  });
  constructor(private admin:AdminService,private route:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.admin.getMoviesData().subscribe( res=> {
      this.movies =res;
      // let index =this.movies.findIndex((movie:{id : string}) =>movie.id == this.id);
      // this.movie = this.movies[index];
    })
  }
  onSubmit(){
    const movie1 = this.addMovieForm.value;
    this.addMovieForm.controls.img_link.setValue('');
    this.addMovieForm.controls.movie_name.setValue('');
    this.addMovieForm.controls.ticketsavail.setValue('');

    this.admin.addMovie(movie1).subscribe((data:any) => console.log(data));
  }
  onEdit(){
  let mov = this.editForm.controls.movie_name.value;
  console.log(mov);
  console.log(this.movies);
  let mv=this.movies.filter((m:any)=>m.movie_name==mov);
  console.log(mv[0]);
  console.log(mv[0].id);
  this.id=mv[0].id;
  console.log(this.id);
    const tick= this.editForm.controls.ticketsavail.value;
    const updated ={
      ticketsavail:tick,
    };
    this.editForm.controls.movie_name.setValue('');
    this.editForm.controls.ticketsavail.setValue('');
    this.admin.editMovie(this.id,updated).subscribe((data) => console.log(data));
  }
  
  onDelete(){
  let tick = this.deleteForm.controls.movie_name.value;
  console.log(tick);
  console.log(this.movies);
  let mv=this.movies.filter((m:any)=>m.movie_name==tick);
  console.log(mv[0]);
  console.log(mv[0].id);
  this.id=mv[0].id;
  console.log(this.id);
  this.deleteForm.controls.movie_name.setValue('');
  this.admin.deleteMovie(this.id).subscribe((data)=>console.log(data));
  }
logout(){
  this.rout.navigate(['/movies']);
}
}
