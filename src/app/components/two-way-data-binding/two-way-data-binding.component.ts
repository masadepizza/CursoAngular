import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {


miTexto: string="Deep Purple";

credenciales={
  usuario: "",
  password: ""
}


onSubmit():void{

    console.log(this.credenciales);

  }

}
