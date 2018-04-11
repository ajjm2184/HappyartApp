import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { FIREBASE_CONFIG } from './firebase.credenciales';
import { CrearCuentaUsuarioPage } from '../pages/crear-cuenta-usuario/crear-cuenta-usuario';
import { UsuariosService } from '../services/usuarios/usuarios.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    InicioPage,
    LoginPage,
    CrearCuentaUsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    InicioPage,
    LoginPage,
    CrearCuentaUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    UsuariosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
