import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _AuthServiceProvider: AuthServiceProvider,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }
  isInvalid = false;
  login() {
    debugger;
    if (this.loginForm.valid) {
      this._AuthServiceProvider.validateLogin(this.loginForm.value).subscribe(
        (result) => {
          if (result.length) {
            this.presentAlert();
            this.isInvalid = false;
          }
          else {
            this.isInvalid = true;
          }
          console.log(result);
        }
      )
    }
  }

  presentAlert(flag = true) {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Welcome',
      buttons: ['OK']
    });
    alert.present();
  }

}
