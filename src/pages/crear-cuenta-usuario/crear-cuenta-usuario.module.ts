import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearCuentaUsuarioPage } from './crear-cuenta-usuario';

@NgModule({
  declarations: [
    CrearCuentaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearCuentaUsuarioPage),
  ],
})
export class CrearCuentaUsuarioPageModule {}
