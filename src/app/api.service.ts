import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule  } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Candidat } from './models/candidat.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiURL= "http://localhost:3000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }


  createCandidate( data: Candidat ): Observable<Candidat>{
    return this.httpClient.post<Candidat>(`${this.apiURL}/add_cv`, data)
  }


  public getCandidate( candidate: any){
    return this.httpClient.post(`${this.apiURL}/get_cand`,candidate).pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user))
      console.log(" ----- user test ----- ", user)
      return user
  }))
  }

}
