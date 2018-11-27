import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'; 

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';






@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
   export class HelloIonicPage {
     usuarios

     constructor(public navCtrl: NavController,public proveedor:Proveedor1Provider){}


       signIn() {
    this.navCtrl.push(LoginPage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

     ionViewDidLoad(){
       this.proveedor.obtenerDatos()
       .subscribe(
         (data)=> {this.usuarios = data['records'];
         console.log('Tigrezhito-traeDatos',data)

         },
         (error)=> {console.log(error);}

         )
     }

     
   }


