import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DisplayService } from 'src/app/services/display.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { UserService } from 'src/app/services/user.service';
import { CountrySelectComponent } from 'src/app/shared/country-select/country-select.component';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  recaptchaVerifier!: firebase.auth.RecaptchaVerifier;
  showOTPInput: boolean = false;
  countryCode: string = '+91';
  mobileNo: string = '';
  loginDisabled: boolean = true;
  otp: string = '';
  otpDisabled: boolean = true;
  flag: string = 'IN';
  constructor(private modalController: ModalController, private authService: AuthService,
    private displayService: DisplayService, private userService: UserService,
    private fun: FunctionsService, private router: Router) { }

    ngOnInit() {
      this.showOTPInput = false;
    }
  
    async checkAutoLogin() {
      try {
        await this.userService.autoLogin();
        this.router.navigateByUrl('tabs/tab1', {replaceUrl: true})
      } catch (e) {
        console.error(e);
      }
    }
  
    async countrySelect() {
      const coutryModal = await this.modalController.create({
        component: CountrySelectComponent,
        breakpoints: [0.5, 0.7],
        initialBreakpoint: 0.5
      });
      coutryModal.onDidDismiss().then((data) => {
        if(data.data) {
          this.countryCode = data.data.countryCode;
          this.flag = data.data.flag;
        }
      })
      await coutryModal.present();
    }
  
    signinWithPhoneNumber() {
      this.loginDisabled = true;
      console.log('country', this.recaptchaVerifier);
  
      if (this.mobileNo && this.countryCode) {
        this.authService.signInWithPhoneNumber(this.recaptchaVerifier, this.countryCode + this.mobileNo).then(
          success => {
            this.showOTPInput = true;
            this.loginDisabled = false;
          },
          error => {
            this.loginDisabled = false;
          }
  
        );
      }
    }
  
    checkOtp() {
      if(this.otp.length == 6) {
        this.otpDisabled = false;
      }else{
        this.otpDisabled = true;
      }
    }
  
    async fireOtpVerification() {
      this.otpDisabled = true;
      try {
        const result = await this.authService.enterVerificationCode(this.otp);
        console.log(result);
        const user  = await this.userService.checkUser(this.countryCode + this.mobileNo, result.uid);
        await this.userService.saveUser(user);
        this.otpDisabled = true;
        await this.fun.navigate('tabs/tab1', {replaceUrl: true});
      } catch (e) {
        this.displayService.toast(JSON.stringify(e));
        this.otpDisabled = false;
      //  this.displayService.toast('Login failed');
      }
    }
  
    checkMobileNumber() {
      if(this.mobileNo.length == 10) {
        this.loginDisabled = false;
      }else{
        this.loginDisabled = true;
      }
    }
  
    async ionViewDidEnter() {
      this.checkAutoLogin();
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        size: 'invisible',
        callback: (response:any) => {
  
        },
        'expired-callback': () => {
        }
      });
    }
    ionViewDidLoad() {
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        size: 'invisible',
        callback: (response:any) => {
  
        },
        'expired-callback': () => {
        }
      });
    }

}
