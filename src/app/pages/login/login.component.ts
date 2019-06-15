import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  public onLogin(){
  	let user: any= this.userForm.value;
  	if(user.username == 'cesar.cast.more@gmail.com' &&
  		user.password == '123456'){
  		this.router.navigate(['']);

  	}
  }

}
