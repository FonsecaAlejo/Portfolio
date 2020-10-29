import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message: string = `function Hola(){

    const agradecimiento = "Muchas gracias";
    const saludo = "hasta luego";

    console.log("` + "${agradecimiento}" + "por pasarte por aquí, espero que te haya gustado," + "${saludo}" +`");
  }`


  constructor() { }

  ngOnInit(): void {
  }

}
