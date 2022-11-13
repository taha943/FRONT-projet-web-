import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ListOpportunite } from 'src/app/models/opportunite.interface';
import { CandOpp } from 'src/app/models/opportunite.interface';

@Injectable({
  providedIn: 'root'
})
export class OpportunitegetService {
  private apiURL= "http://localhost:3000/api";
  constructor(private http:HttpClient) { }

  getlistopportunité(): Observable<ListOpportunite[]>{

    return this.http.get<any>(`${this.apiURL}/list_opportunity`)
    .pipe(map(data => {

      return data;
    }));
  }
  getlistopportunité_cond(_id_condidat : any): Observable<ListOpportunite[]>{

    return this.http.get<any>(`${this.apiURL}/list_opportunity_cond/${_id_condidat}`)
    .pipe(map(data => {
        let form =data 
        console.log('hhhhhhh')
        console.log(form)
      return data;
    }));
  }

  postulerOpp(data: CandOpp): Observable<CandOpp>{
    console.log("------------  data", data)
    return this.http.post<CandOpp>(`${this.apiURL}/postuler`, data)
  }



}
