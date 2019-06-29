import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl()
  });

  err: string;

  constructor(private router: Router,
    private authService: AuthService,
    private firestore: AngularFirestore) {}

  ngOnInit() {}

  public onRegister() {
    let user: any = this.userForm.value;

    this.authService.register(user.email, user.password)
      .then(res => {

        console.log(res);

          this.firestore.collection("users").add({
              email: user.email,
              first_name: user.first_name,
              last_name: user.last_name,
              id: res.user.uid
            })
            .then(res => {
              console.log(res);
            }).catch(err=>{
              console.log(err);
            })

        

        this.router.navigate(['login']);
      }).catch(err => {
        this.err = err.message;
      });




  }
}
