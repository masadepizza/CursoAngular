import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css'
})
export class OneWayBindingComponent {

  nombre: string = "Ritchie";
  saludo: string="Hola";
}
