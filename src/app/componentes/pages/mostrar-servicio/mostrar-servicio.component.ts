import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from 'src/app/services/servicio-prueba.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-servicio',
  templateUrl: './mostrar-servicio.component.html',
  styleUrls: ['./mostrar-servicio.component.css']
})
export class MostrarServicioComponent implements OnInit {

  usuarios ;

  constructor(public _serviceUser: ServicioPruebaService,
              public router:Router) {
      console.log("Service listo para usar");

      // this.obtenerUsuarios;
  }




  // obtenerUsuarios (){
  //   this._serviceUser.getUsers()
  //     .then( ((usuarios)=>console.log(usuarios)))
  // }
  //
  // this._serviceUser.getUsers().then(
  //
  //   )



  ngOnInit() {

      // this.usuarios=this._serviceUser.getUsuarios();

      this._serviceUser.getUsers()
        .then(
          (resultados)=> {
            this.usuarios=resultados;
            console.log(resultados);
          }
        )

      // console.log(this.usuarios);

  }

}
