import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [RouterOutlet, RouterLink,],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  mensajeSaludo = '¡Hola! Bienvenido a la aplicación de personajes históricos.';
  pregunta = '¿Qué deseas hacer?';

}
