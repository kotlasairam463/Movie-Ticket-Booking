import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }
  baseUrl = "https://633bf98974afaef164feeb5c.mockapi.io/users";
  movieUrl ="https://633bf98974afaef164feeb5c.mockapi.io/movies";
  bookedUrl="https://633bf98974afaef164feeb5c.mockapi.io/bookedmovies";

  adduser(user:any): Observable<any> {
    return this.httpClient.post(this.baseUrl, JSON.stringify(user), {
      headers: {"Content-type": "application/json"}
    })
  }
  getUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }
  
  getMoviesData():Observable<any>
  { 
    return this.httpClient.get(this.movieUrl);
  }

  updateData(id:any,updateBody:any){
    const endpoint = this.movieUrl+"/"+id;
    return this.httpClient.put(endpoint,updateBody);
  }
  addbooked(userdetails:any):Observable<any>{
    return this.httpClient.post(this.bookedUrl,JSON.stringify(userdetails),{
      headers:{"Content-type":"application/json"}
    })}
    getbookeddetails():Observable<any>{
      return this.httpClient.get(this.bookedUrl);
    }
}