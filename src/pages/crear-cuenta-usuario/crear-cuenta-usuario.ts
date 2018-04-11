import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioItem } from '../../models/usuario/usuario.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@IonicPage()
@Component({
  selector: 'page-crear-cuenta-usuario',
  templateUrl: 'crear-cuenta-usuario.html',
})
export class CrearCuentaUsuarioPage {

  usuarioItem = {} as UsuarioItem;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private users: UsuariosService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuentaUsuarioPage');
  }

  crearCuentaUsuario(usuarioItem: UsuarioItem) {
    console.log(usuarioItem);

    this.users.addUsuario(usuarioItem).then(ref => {
      console.log(ref.key);
    })

  }

}
