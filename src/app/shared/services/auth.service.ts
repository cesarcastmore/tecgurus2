import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public api_key: string;
  user: Observable < firebase.User > ;

  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;

  }

  register(email: string, password: string): Promise < any > {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }


  public login(email: string, password: string): Promise < any > {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }


  public logout(): Promise < any > {
    return firebase.auth().signOut();
  }




}
