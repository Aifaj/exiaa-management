import { Injectable } from '@angular/core';
import { LoaderComponent } from '../shared/loader/loader.component';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { RestService } from './rest.service';
import { String } from 'typescript-string-operations';
import { DisplayService } from './display.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  static readonly nodeAuth: string = 'auth/';
  static readonly nodeUser: string = 'user/';
  static readonly NodeAuthUserByUidAndMobile: string = UserService.nodeUser + 'loginByMobileAndUid';
  static readonly NodeSaveUser: string = 'saveUser';
  static readonly NodeAddUser: string =UserService.nodeUser + 'addUser';
  static readonly NodeAddUserInstitute: string = UserService.nodeUser + 'addUserInstituteMap';
  static readonly NodeGetAllUserType: string =UserService.nodeUser + 'getAllUserType';
  static readonly NodeGetAllAcadmicYear: string =UserService.nodeUser + 'getAllAcademic';
  static readonly NodeGetAllInstitute: string =UserService.nodeUser + 'getAllUserInstitute';
  static readonly NodeUserByUid: string =UserService.nodeUser + 'getUserByUid?uid={0}';
 // static readonly nodeUserId: string = UserService.nodeUser + 'getUserByUid?uid={0}';
  static readonly NodeUpdateUser: string = 'updateUser';
  static readonly NodeUpdateInitialUser: string = 'updateInitialUser';
  static readonly NodeGetUserById: string =UserService.nodeUser + 'getUserById?userId={0}';
  static readonly NodeUpdateQrColor: string = 'updateQrColor';
  static readonly nodeCheckMobileNo: string = UserService.nodeUser + 'checkMobileNo?mobileNo={0}';
  static readonly NodeUpdateUid: string = UserService.nodeUser + 'updateUid';
  // static readonly NodeGetAllUserType: string = UserService.nodeUser +'getAllUserType';


  public user: any;

  public userObservable: BehaviorSubject<any> = new BehaviorSubject < any > (
    null
  );

  constructor (public authService: AuthService, public restService: RestService,
    public displayService: DisplayService,
    public loaderService: LoaderService) { }

  public async autoLogin() {
    LoaderComponent.showLoader();
    const fireLogin = await this.authService.getSavedLogin();
    LoaderComponent.hideLoader();
    if (fireLogin && fireLogin.uid != null) {
      const user = await this.readUser(fireLogin.uid);
      return this.user;
    }
    throw new Error('No User Found');
  }

  public async addUser(user: any) {
    console.log(user);
    try {
      const result = await this.restService.postFormData(UserService.NodeAddUser, user);
      console.log(result);
      return Promise.resolve(result.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async addUserInstitute(user: any) {
    console.log(user);
    try {
      const result = await this.restService.postFormData(UserService.NodeAddUserInstitute, user);
      console.log(result);
      return Promise.resolve(result.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async addsaveUser(user: any) {
    const body = {
      userId: user.userId,
    //  name: user.displayName,
      // email: user.email,
      // dob: user.dob,
      // gender:user.gender,
      firstName: user.firstName,
      lastName:user.lastName,
      uid: user.uid,
    };
    const response = await this.restService.post(UserService.NodeAddUser, user);
    await this.readUser(user.uid);
    return response;
  }
  public async readUser(uid: any): Promise<any> {
    try {
      LoaderComponent.showLoader();
      const res = await this.restService.get(String.Format(UserService.NodeUserByUid, uid));
      await this.saveUser(res.data);
      console.log(res.data)
      this.publishUser();
      LoaderComponent.hideLoader();
      return Promise.resolve(res.data);
    } catch (e) {
      LoaderComponent.hideLoader();
      return Promise.reject(e);
    }

  }

  public async checkUser(mobileNo: any, uid: any): Promise<any> {
    try {
      LoaderComponent.hideLoader();
      let saveData = {
        mobileNo: mobileNo,
        uid: uid,
      }
      const resReCheck = await this.restService.post(UserService.NodeAuthUserByUidAndMobile, saveData);
      if (resReCheck.status) {
        await this.saveUser(resReCheck.data);
        await this.publishUser();
        LoaderComponent.hideLoader();
        return Promise.resolve(resReCheck.data);
      } else {
        this.displayService.toast('Something Went Wrong. Please try again.');
        LoaderComponent.hideLoader();
        return Promise.reject('Something Went Wrong. Please try again.');
      }



    } catch (e) {
      this.displayService.toast('Something Went Wrong. Please try again.');
      return Promise.reject(e);
    }

  }


  public async saveUser(user: any) {
    if (user) {
      this.user = user;
      // await this.storageService.saveUser(this.user)
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      //await this.storageService.deleteUser()
      localStorage.removeItem('user');
    }
    return;
  }

  public async publishUser() {
    this.userObservable.next(this.user);
  }

  getUser() {
    return this.user;
  }

  public async updateUser(formData: any): Promise<any> {
    // this.loaderService.simpleLoader();
    try {
      const card = await this.restService.postFormData(UserService.NodeUpdateUser, formData);
      console.log(card)
      // this.loaderService.dismissLoader();
      return Promise.resolve(card);
    } catch (e) {
      // this.loaderService.dismissLoader();
      return Promise.reject(e);
    }

  }

 
  public async updateInialUser(body: any): Promise<any> {
    // this.loaderService.simpleLoader();
    try {
      const user = await this.restService.post(UserService.NodeUpdateInitialUser, body);
      console.log(user)
      // this.loaderService.dismissLoader();
      return Promise.resolve(user);
    } catch (e) {
      // this.loaderService.dismissLoader();
      return Promise.reject(e);
    }

  }

  public async getUserById(userId: any): Promise<any> {
    this.loaderService.simpleLoader();
    try {
      const res = await this.restService.get(String.Format(UserService.NodeGetUserById, userId));
      this.loaderService.dismissLoader();
      return Promise.resolve(res.data);
    } catch (e) {
      this.loaderService.dismissLoader();
      return Promise.reject(e);
    }

  }

  public async getAllUserType(): Promise<any> {
    this.loaderService.simpleLoader();
    try {
      const res = await this.restService.get(UserService.NodeGetAllUserType);
      this.loaderService.dismissLoader();
      return Promise.resolve(res);
    } catch (e) {
      this.loaderService.dismissLoader();
      return Promise.reject(e);
    }

  }

  public async updateQrColor(color: string, user = this.user,) {
    let body = {
      userId: user.userId,
      qrCodeColor: color
    }
    this.restService.post(UserService.NodeUpdateQrColor, body).then((res) => {
    });
  }

  public async checkMobileNo(PhoneNo: any) {
    const response = await this.restService.get(String.Format(UserService.nodeCheckMobileNo, PhoneNo));
    return response;
  }

  public async fireOtpVerification(PhoneNo: any, otp: any, referCode: any): Promise<any> {
    try {
      // ValidationUtil.verifyEmail(email);
      // ValidationUtil.verifyPassword(password);
      const fireLoginResponse: any = await this.authService.enterVerificationCode(otp);
      const user = await this.readUser(fireLoginResponse.uid);
      if (!user.status) {
        const res = await this.checkMobileNo(PhoneNo);
        if (!res.status) {
          const newUser = {
            mobileNo: PhoneNo + "",
            referByCode: referCode
          }
          const saveUser = await this.saveUserWithUid(newUser, fireLoginResponse.uid);
        } else {
          const saveUser = await this.saveUserWithUid(res.data, fireLoginResponse.uid);
        }

        setTimeout(() => {
          const user = this.readUser(fireLoginResponse.uid);
          return Promise.resolve(user);
        }, 1000);
      }
      return Promise.resolve(user);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }

  public async saveUserWithUid(user: any, uid: string) {
    console.log(user);
    user.uid = uid;
    const response = await this.restService.post(UserService.NodeUpdateUid, user);
    await this.readUser(uid);
    return response;
  }


  // public async getAllUserType(): Promise<any> {
  //   try {
  //     const data = await this.restService.get(UserService.NodeGetAllUserType);
  //     return Promise.resolve(data);
  //   } catch (e) {
  //     return Promise.reject(e);
  //   }

  // }

  public async getAllAcadmicYear(): Promise<any> {
    try {
      const data = await this.restService.get(UserService.NodeGetAllAcadmicYear);
      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject(e);
    }

  }

  public async getAllUserInstitute(): Promise<any> {
    try {
      const data = await this.restService.get(UserService.NodeGetAllInstitute);
      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject(e);
    }

  }

}
