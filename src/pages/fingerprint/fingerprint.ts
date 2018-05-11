import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-fingerprint',
  templateUrl: 'fingerprint.html',
})
export class FingerprintPage {

  constructor(
    private androidFingerprintAuth: AndroidFingerprintAuth,
    private camera: Camera,
    public navCtrl: NavController,
    private fileChooser: FileChooser,
    public navParams: NavParams,
    private nativeStorage: NativeStorage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintPage');
  }

  found = "";
  authenticate() {
    this.androidFingerprintAuth.isAvailable()
      .then((result) => {
        if (result.isAvailable) {
          // it is available

          this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
            .then(result => {
              if (result.withFingerprint) {
                this.found = 'Successfully encrypted credentials.';
                console.log('Successfully encrypted credentials.');
                console.log('Encrypted credentials: ' + result.token);
              } else if (result.withBackup) {
                this.found = 'Successfully authenticated with backup password!';
                console.log('Successfully authenticated with backup password!');
              } else {
                this.found = 'Didn\'t authenticate!';
                console.log('Didn\'t authenticate!');
              }
            })
            .catch(error => {
              if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                this.found = 'Fingerprint authentication cancelled';
                console.log('Fingerprint authentication cancelled');
              } else console.error(error)
            });

        } else {
          this.found = "not found";
          // fingerprint auth isn't available
        }
      })
      .catch(error => {
        this.found = error;
        console.error(error)
      });
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  imageData = "";
  onCamera() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imageData = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  file = "";
  onFileOpen() {
    this.fileChooser.open()
      .then(uri => {
        this.file = uri;
      })
      .catch(e => {
        this.file = e;
      });
  }

  onSetStorage() {
    this.nativeStorage.setItem('myitem', { property: 'value', anotherProperty: 'anotherValue' })
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
  }

  storageData = "";
  onGetStorage() {
    this.nativeStorage.getItem('myitem')
      .then(
        data => {
          this.storageData = JSON.stringify(data);
          console.log(data)
        },
        error => console.error(error)
      );
  }

}
