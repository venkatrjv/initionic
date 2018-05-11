import { ErrorHandler, OnDestroy, Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
declare let html2canvas: any;

@Injectable()
export class GlobalErrorHandler extends ErrorHandler implements OnDestroy {

    loginUser;
    constructor(
        private alertCtrl: AlertController
    ) {
        super(false);
    }

    public handleError(error: any): void {
        // You can add your own logic here.
        // It is not required to delegate to the original implementation
        super.handleError(error);
        if (error.status === 0) {
            this.presentAlert(error);
        }
        else if (error.status === 500) {
            this.presentAlert(error);
        }
        else if (error.message !== undefined && error.message.startsWith("Communications link failure")) {
        }
        else if (error.message !== undefined) {
            this.presentAlert(error);
            throw new Error(error.message);
        }
        else {
            this.presentAlert(error);
        }
    }

    presentAlert(error) {
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: (typeof (error) == "string") ? error : (typeof (error) == "object") ? JSON.stringify(error) : error,
            buttons: ['OK']
        });
        console.log(error);
        alert.present();
    }

    ngOnDestroy(): void {
    }
}