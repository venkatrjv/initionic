import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { PropertyListPage } from '../pages/property-list/property-list';
import { PropertyDetailPage } from '../pages/property-detail/property-detail';
import { BrokerListPage } from '../pages/broker-list/broker-list';
import { BrokerDetailPage } from '../pages/broker-detail/broker-detail';
import { FavoriteListPage } from '../pages/favorite-list/favorite-list';
// import {AboutPage} from '../pages/about/about';

import { PropertyService } from "../providers/property-service-mock";
import { BrokerService } from "../providers/broker-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SharedModule } from '../providers/shared.module';
import { FingerprintPage } from '../pages/fingerprint/fingerprint';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
// import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { NativeStorage } from '@ionic-native/native-storage';
import { AuthServiceProvider } from '../providers/auth-service';
import { LoginPage } from '../pages/login/login';
import { GlobalErrorHandler } from '../providers/global-eror.service';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    // AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    FingerprintPage,
    HomePage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    // AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    FingerprintPage,
    BrokerDetailPage,
    HomePage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertyService,
    BrokerService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    AndroidFingerprintAuth,
    Camera,
    FileChooser,
    NativeStorage,
    AuthServiceProvider
  ]
})
export class AppModule { }
