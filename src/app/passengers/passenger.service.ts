import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Passenger, passengers } from "src/assets/passengers";

@Injectable({
  providedIn: "any",
})
export class PassengerService {
  private apiUrl: string = "http://localhost:3000/Passenger";
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  public getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.apiUrl);
  }
  public editPassenger(passenger: Passenger): Observable<any> {
    const url = `${this.apiUrl}/${passenger.id}`;
    return this.http.put(url, passenger, this.httpOptions);
  }

  public getPassengerById(id:number):Observable<Passenger>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Passenger>(url, this.httpOptions);
  }

  public deletePassenger(id: number): Observable<Passenger> {
    console.log("deleting passenger Service id =" + id);
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Passenger>(url, this.httpOptions);
  }

  
  public addPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.apiUrl, passenger, this.httpOptions);
  }
}
