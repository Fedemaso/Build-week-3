import { IUser } from './../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IExperience } from '../interfaces/iexperience';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Form } from '@angular/forms';
import { IPost } from '../interfaces/ipost';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl: string = environment.BE_URL;
  private key: string = environment.API_KEY;
  private authSubject = new BehaviorSubject<null | IUser>(null);
  private authExp = new BehaviorSubject<null | IExperience>(null);
  private authPost = new BehaviorSubject<null | IPost>(null);
  user$ = this.authSubject.asObservable();
  userID = this.user$.pipe(map((_id) => _id));
  exp$ = this.authExp.asObservable();
  expID = this.exp$.pipe(map((_id) => _id));
  post$ = this.authPost.asObservable();
  postID = this.post$.pipe(map((_id) => _id));

  constructor(private http: HttpClient, private router: Router) {}

  getAllUsers() {
    return this.http.get<IUser[]>(this.apiUrl + 'profile/', {
      headers: { Authorization: [this.key] },
    });
  }

  getMeUsers() {
    return this.http
      .get<IUser>(this.apiUrl + 'profile/me', {
        headers: { Authorization: [this.key] },
      })
      .pipe(
        tap((res) => {
          this.authSubject.next(res);
        })
      );
  }

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

  getAllTheExp(UserId: string) {
    return this.http.get<IExperience>(
      this.apiUrl + 'profile/' + UserId + '/experiences',
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  postExperience(data: IExperience) {
    return this.http.post<IExperience>(
      this.apiUrl + 'profile/' + this.authSubject.value?._id + '/experiences',
      data,
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  getSingleExp() {
    return this.http.get<IExperience>(
      this.apiUrl +
        'profile/' +
        this.authSubject.value?._id +
        '/experiences/' +
        this.authExp.value?._id,
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  updateExperience() {
    return this.http.get<IExperience>(
      this.apiUrl +
        'profile/' +
        this.authSubject.value?._id +
        '/experiences/' +
        this.authExp.value?._id,
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  deleteExperience() {
    return this.http.delete(
      this.apiUrl +
        'profile/' +
        this.authSubject.value?._id +
        '/experiences/' +
        this.authExp.value?._id,
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  getAllThePost() {
    return this.http.get<IPost[]>(this.apiUrl + 'posts/', {
      headers: { Authorization: [this.key] },
    });
  }

  postAPost() {
    return this.http.post<IPost>(this.apiUrl + 'posts/', {
      headers: { Authorization: [this.key] },
    });
  }

  getASinglePost() {
    return this.http.get<IPost>(
      this.apiUrl + 'posts/' + this.authPost.value?._id,
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  updatePost() {
    return this.http.put<IPost>(
      this.apiUrl + 'posts/' + this.authPost.value?._id,
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  deletePost() {
    return this.http.delete(this.apiUrl + 'posts/' + this.authPost.value?._id, {
      headers: { Authorization: [this.key] },
    });
  }
}
