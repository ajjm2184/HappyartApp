import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  loader: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController, public storage: Storage) {
    this.presentLoading();
    platform.ready().then(() => {
      this.storage.get('introShown').then((result) => {
        if (result) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = IntroPage;
          this.storage.set('introShown', true);
        }
        this.loader.dismiss();
      });
    });
  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Verificando..."
    });

    this.loader.present();
  }
}

