import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  baseUrl = "https://633bf98974afaef164feeb5c.mockapi.io/movies";
  getMoviesData():Observable<any>
  { 
    return this.httpClient.get(this.baseUrl);
  }

  addMovie(movie:any): Observable<any> {
    return this.httpClient.post(this.baseUrl, JSON.stringify(movie), {
      headers: {"Content-type": "application/json"}
    })
  }
  editMovie(id:any,tick:any):Observable<any>{
    return this.httpClient.put(this.baseUrl+'/'+id,tick);
  }
  deleteMovie(id:string):Observable<any>{
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }
 
  
}
