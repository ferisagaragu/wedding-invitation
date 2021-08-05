import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  findAllGuest(query?: string) {
    return this.http.get(`http://localhost:5000/rest/guests${query ? query : ''}`);
  }

  deleteGuest(uuid: string) {
    return this.http.delete(`http://localhost:5000/rest/guests/${uuid}`);
  }

}
