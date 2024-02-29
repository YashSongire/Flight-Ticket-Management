import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8083/api/v1/users";

  constructor(private httpclient : HttpClient) { }

  signin(username: string, password: string, typeofuser : User["usertype"]): Observable<User[]> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('type', typeofuser);

    return this.httpclient.get<User[]>(`${this.baseUrl}/userdata`, { params });
  }
}
