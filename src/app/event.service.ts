import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _url = "http://localhost:3000/api";
  private _eventsUrl = this._url + "/events";
  private _specialEventsUrl = this._url + "/special";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl)
  }
}
