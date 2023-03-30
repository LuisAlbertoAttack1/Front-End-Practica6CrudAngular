import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})



export class InformacionComponent {
//Aqui Puedes Colocar La Funcionalidad
 // public personas : string = 'Lo Que Puedes Meter En Tu Input';
public inventario:any = [
// La Mandamos A Traer En El informacion .component.html
    {id:1, nombre: "Pantalon", precio:250},
    {id:2, nombre: "Chamarra", precio:500}

];

public formulario:any = {
// Los ,andas a traer en tu table de informacion.component.html
    id:null,
    nombre:null,
    precio:null

}

public seleccionar(articulos:any) : void { 
//AQUI INICIO LA FUNCION DE SELECCIONAR 
  this.formulario.id = articulos.id;
  this.formulario.nombre = articulos.nombre;
  this.formulario.precio = articulos.precio;
//AQUI TERMINA LA FUNCION DE SELECIIONAR  
}
public eliminar(id:number) : void { 
//AQUI EMPIEZA LO DE LA FUNCION DE ELIMINAR
  for (let index = 0; index < this.inventario.length; index++) {
    if (this.inventario[index].id == id) {
        this.inventario.splice(index, 1);

        Swal.fire(
          'Eliminado Con Exito!',
          '',
          'success'
        )
        
        break;      
    }
    
  }
//AQUI TERMINA LO DE LA FUNCION DE INSERCION
}
//Funcion de insercion
public agregar() : void {
//TIENES QUE VER EL ORDEN DE LO QUE QUIERES Y MOSTRARA LOS MENSAJES 
// || - > 	OR lógico - > Añade una opcion de o otra cosa 
// - > TE MOSTRARA LA INFORMACION QUE NO AS LLENADO LOS CAMPOS QUE TE FALTAN
  if (!this.formulario.id || !this.formulario.nombre || !this.formulario.precio) {

    Swal.fire({
      icon: 'error',
      title: 'No Cumples Con La Informacion Completa Para Seguir Verifica Tu Informacion!!',
      text: ''

    })

    return;
  }

//YA NO TE PERMITIRA METER UN ID REPETIDO SOLAMENTE PUEDES COLOCAR UN VALOR
  for (let index = 0; index < this.inventario.length; index++) {
    if (this.inventario[index].id == this.formulario.id) {
      Swal.fire(
        '( id ) Identificada Utiliza Otro Numero De Inicio',
        '',
        'question'
      )

      return;
    }
    
  }

  let datoNuevo = {
//AQUI EMPIZA LO DE LA FUNCION DE INSERCION
    id : this.formulario.id,
    nombre : this.formulario.nombre,
    precio : this.formulario.precio
  };

  this.inventario.push(datoNuevo);
  Swal.fire(
    'Agregado Con Exito!',
    '',
    'success'
  )

  //AQUI TERMINA LO DE LA FUNCION DE INSERCION
  //esto que agrego va a mostar vacio en los input
  //valores null y cadenas vacias
  this.formulario.id = null;
  this.formulario.nombre = "";
  this.formulario.precio = null;



/* 
- > Algo que intente hacer y no funciono por el posicionamiento
  for (let index = 0; index < this.inventario.length; index++) {
    if (this.inventario[index].id == this.formulario.id) {

      alert("No Cumples Con La Informacion Completa Para Seguir Verifica Tu Informacion");
      break;
    }
    
  } */


}


public editar(id:any) : void {
//INICIO DE FUNCION DE ACTUALIZAR
  for (let index = 0; index < this.inventario.length; index++) {
    if (this.inventario[index].id == id) {
      this.inventario[index].id = this.formulario.id;
      this.inventario[index].nombre = this.formulario.nombre;
      this.inventario[index].precio = this.formulario.precio;
      Swal.fire(
        'Se Ha Modificado Con Exito!!!',
        '',
        'success'
      )
      this.formulario.id = null;
      this.formulario.nombre = "";
      this.formulario.precio = null;

      break;
      
    }
  }
//FIN DE FUNCION DE ACTUALIZAR
}
}

