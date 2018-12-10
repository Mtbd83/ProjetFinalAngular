import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Router} from '@angular/router';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  private url = 'http://localhost:8080/projet/rest/user';

  private header: HttpHeaders;
  private _user = new User();
  private auth: boolean;



  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
    this.user.token = token;
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/user']);
  }


  constructor(private http: HttpClient, private router: Router) {
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  public list(): Observable<User[]> {
    return this.http.get<User[]>(this.url, {headers: this.header});
  }


  public findByUsername(user): Observable<User> {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
    });
    return this.http.get<User>(`${this.url}/${user.username}`, {headers: this.header});
  }


  public supp(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {headers: this.header});
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(this.url, user, {headers: this.header});
  }

  public register(user: User) {
    return this.http.post(this.url, user, {headers: this.header});
  }
}
