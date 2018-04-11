import { Injectable }  from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { UsuarioItem } from './../../models/usuario/usuario.model';

@Injectable()

export class UsuariosService{

    private UsuarioItemRef = this.db.list<UsuarioItem>('usuarios');

    constructor(private db: AngularFireDatabase){

    }

    getUsuarios(){
        return this.UsuarioItemRef;
    }

    addUsuario(item: UsuarioItem){
        return this.UsuarioItemRef.push(item);

    }
    
    editUsuario(item: UsuarioItem){
        return this.UsuarioItemRef.update(item.key, item);

    }

    deleteUsuario(item: UsuarioItem){
        return this.UsuarioItemRef.remove(item.key);

    }
}