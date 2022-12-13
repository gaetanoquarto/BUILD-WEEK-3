import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }



  accedi(form: NgForm) {
    this.authSrv.login().subscribe((ris) => {
      let users: any = ris;
      console.log(users);
      users.map((user: User) => {
        const email = form.value.email;
        const password = form.value.password;

        if (user.email === email && user.password === password) {
          let newUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
          }
          localStorage.setItem('user', JSON.stringify(newUser));
          this.router.navigate(['']);
        }
      });
    })
  }

}


