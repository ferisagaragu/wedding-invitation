import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient) { }

  findAllInvitation(query?: string) {
    return this.http.get(`http://localhost:5000/rest/invitations${query ? query : ''}`)
  }

}
