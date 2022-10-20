import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-Saludo',
  templateUrl: './Saludo.component.html',
  styleUrls: ['./Saludo.component.css']
})
export class SaludoComponent implements OnInit {

@Input() nombre: String = "Anonimo";

  constructor() { }

  ngOnInit() {
    //instrucciones previas a la renderizacion del componente
    console.log("ngOnInit del componente Saludo")

  }

}
