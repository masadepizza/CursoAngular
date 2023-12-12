import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  nombre: string = "Mabel";
  miUrl: string = "assets/images/patito.jpg";
  miAlt: string = "Imagen de un patito"; 
  miClase: string= "mi-clase"

}
