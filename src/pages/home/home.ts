import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { InicioPage } from '../inicio/inicio';
import { CrearCuentaUsuarioPage } from '../crear-cuenta-usuario/crear-cuenta-usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};
  showUser: boolean = false;

  constructor(public navCtrl: NavController,
    private facebook: Facebook) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  registrarFacebook() {
    this.facebook.login(['public_profile', 'email'])
      .then(rta => {
        console.log(rta.status);
        if (rta.status == 'connected') {
          //this.getInfo();
          this.navCtrl.push(InicioPage);
        };
      })
      .catch(error => {
        console.error(error);
      });
  }

  getInfo() {
    this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender', ['public_profile', 'email'])
      .then(data => {
        console.log(data);
        this.showUser = true;
        this.user = data;
      })
      .catch(error => {
        console.error(error);
      });
  }

  goCrearCuenta() {
    this.navCtrl.push(CrearCuentaUsuarioPage);
  }
}
