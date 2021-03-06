import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {


  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/user']);
  }

}
