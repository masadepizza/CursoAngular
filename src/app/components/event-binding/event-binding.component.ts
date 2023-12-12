import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  // atributo
  miClase: string= "fondo-azul";


  // metodo
  cambiaAFondoRojo(evento:any):void{

    // console.log(evento);
    this.miClase="fondo-rojo";

  }

  cambiaAFondoVerde(evento:any):void{

    // console.log(evento);
    this.miClase="fondo-verde";

  }

  onInput(evento:any):void{

    // console.log(evento.target.value);
    this.miClase= evento.target.value; //al escribir fondo-colorquesea se cambia el color
    
  }

}
