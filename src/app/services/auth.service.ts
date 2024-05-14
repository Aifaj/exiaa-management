import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoaderComponent } from '../shared/loader/loader.component';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, first } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  confirmationResult: firebase.auth.ConfirmationResult | undefined;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', null || '{}');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }
  
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
  getSavedLogin() {
    return this.ngFireAuth.authState.pipe(first()).toPromise();
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // getSavedLogin() {
  //   const user = JSON.parse(localStorage.getItem('user') || '{}');
  //   return user;
  // }

  public signInWithPhoneNumber(recaptchaVerifier: any, phoneNumber: any) {
    LoaderComponent.showLoader();
    return new Promise<any>((resolve, reject) => {

      this.ngFireAuth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
        .then((confirmationResult) => {
          this.confirmationResult = confirmationResult;
          resolve(confirmationResult);
          LoaderComponent.hideLoader();
        }).catch((error) => {
          console.log(error);
          reject('SMS not sent');
          LoaderComponent.hideLoader();
        });
    });
  }


  public async enterVerificationCode(code:any) {
    return new Promise<any>((resolve, reject) => {
      if(this.confirmationResult){
        this.confirmationResult.confirm(code).then(async (result) => {
          console.log(result);
          const user = result.user;
          resolve(user);
        }).catch((error) => {
          reject(error.message);
        });
      }else{
        reject('SMS not sent');
      }
    });
  }

  SignOut() {
    return this.ngFireAuth.signOut();
  }

}
