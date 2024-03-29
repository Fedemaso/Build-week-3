import { IUser } from './../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IExperience } from '../interfaces/iexperience';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Form } from '@angular/forms';
import { IPost } from '../interfaces/ipost';
import { IComments } from '../interfaces/icomments';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl: string = environment.BE_URL;
  private key: string = environment.API_KEY;
  private keyComment: string = environment.API_KEY_COMMENT;
  private authSubject = new BehaviorSubject<IUser | null>(null);
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
    return this.http.put<IUser>(this.apiUrl + 'profile', data, {
      headers: { Authorization: [this.key] },
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

  getSingleExp(id: string) {
    return this.http.get<IExperience>(
      this.apiUrl +
        'profile/' +
        this.authSubject.value?._id +
        '/experiences/' +
        id,
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  updateExperience(data: IExperience, id: string) {
    // console.log('this.authSubject.value?._id', this.authSubject.value?._id);

    return this.http.put<IExperience>(
      this.apiUrl +
        'profile/' +
        this.authSubject.value?._id +
        '/experiences/' +
        id,
      data,
      {
        headers: { Authorization: [this.key] },
      }
    );
  }

  deleteExperience(id: string) {
    return this.http.delete(
      this.apiUrl +
        'profile/' +
        this.authSubject.value?._id +
        '/experiences/' +
        id,
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

  postAPost(data: IPost) {
    return this.http.post<IPost>(this.apiUrl + 'posts/', data, {
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

  updatePost(data: IPost) {
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

  postComment(formComment: IComments) {
    return this.http.post(this.apiUrl + 'comments/', formComment, {
      headers: { Authorization: [this.keyComment] },
    });
  }

  getComment(idPost: string) {
    return this.http.get<IComments[]>(this.apiUrl + 'comments/' + idPost, {
      headers: { Authorization: [this.keyComment] },
    });
  }
}
