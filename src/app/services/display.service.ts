import {Injectable} from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  getAllPlan(): any {
    throw new Error('Method not implemented.');
  }

  constructor(private alertController: AlertController,
              private toastController : ToastController
              ) {
  }

  async alert(header: string, subHeader: string) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
      }
    )
    return alert.present();
  }

  async toast(message : string, duration : number = 2000, position: 'top' | 'bottom' | 'middle' = 'bottom'){
    const toast = await this.toastController.create({
      message : message,
      duration : duration,
      position : position
    })
    return toast.present();
  }
}
