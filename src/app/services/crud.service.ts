import { IUser } from './../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IExperience } from '../interfaces/iexperience';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl: string = environment.BE_URL;
  private key: string = environment.API_KEY;
  private authSubject = new BehaviorSubject<null | IUser>(null);
  user$ = this.authSubject.asObservable();


  constructor(private http: HttpClient, private router: Router) {}

  getAllUsers() {
    return this.http.get<IUser[]>(this.apiUrl + "profile/", {
      headers: { Authorization: [this.key] },
    });
  }

  getMeUsers() {
    return this.http.get<IUser>(this.apiUrl + 'profile/me', {
      headers: { Authorization: [this.key] },
    }).pipe(tap((res) => {
      this.authSubject.next(res)
    })

  )}

  getUsersById(id: string) {
    return this.http.get<IUser>(this.apiUrl + id, {
      headers: { Authorization: [this.key] },
    });
  }

  updateUser(data: IUser) {
    return this.http.put<IUser>(this.apiUrl, {
      headers: { Authorization: [this.key] },
      data,
    });
  }

  getAllTheExp(UserId:string) {
    return this.http.get<IExperience>(this.apiUrl + "profile/" + UserId + "/experiences", {
      headers: { Authorization: [this.key] }
    })
  }



}
