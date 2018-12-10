import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private _user: Array<User>;
  private _currentUser = new User();

  constructor(private _userService: UserService, private router: Router, private api: ApiService) {
  }

  ngOnInit() {
   // this.list();
  }

  public list() {
    this._userService.list().subscribe(resultat => {
      this._user = resultat;
    }, error => {
      console.log(error);
    });
  }

  delete(id) {
    this._userService.supp(id).subscribe(resultat => {
      this.list();
    });
  }

  save() {
    this._userService.findByUsername(this.currentUser).subscribe(result => {
        if (result != null) {
          this._currentUser = result;
          this._userService.setToken('userToken');
          this.router.navigateByUrl('/home');
        } /*else {
          console.log('pas present');
          this.api.login(this.currentUser.username, this.currentUser.password).subscribe(r => {
              if (r) {
                console.log(r);
                this._userService.setToken(r.token);
                this.router.navigateByUrl('/home');
              }
            },
            r => {
              console.log(r);
              alert(r.error.error);
            });
        }*/
      }, error => {
      console.log(error);
      }
    );
  }




  get user(): Array<User> {
    return this._user;
  }

  set user(value: Array<User>) {
    this._user = value;
  }


  get currentUser(): User {
    return this._currentUser;
  }

  set currentUser(value: User) {
    this._currentUser = value;
  }
}



