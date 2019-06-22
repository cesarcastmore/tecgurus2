import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private router: Router,
    private authService: AuthService) {}

  ngOnInit() {}

  public onLogin() {
    let user: any = this.userForm.value;
    /*if (user.username == 'cesar.cast.more@gmail.com' &&
      user.password == '123456') {

      localStorage.setItem('user', JSON.stringify({
        is_active: true
      }))


      this.router.navigate(['']);

    }*/

    this.authService.login(user.username, user.password)
      .then(res => {
        console.log(res);
        this.router.navigate(['']);

      }).catch(err => {
        console.log(err);
      });



  }

}
