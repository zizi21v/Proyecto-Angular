import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PersonajesService } from '../personajes.service';
import { Personaje } from '../personajes.model';
import { LoadingService } from '../loading.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MayusculasDirective } from '../mayusculas.directive';

@Component({
  selector: 'Form',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone:true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    MayusculasDirective,

  ],
})
export class FormularioComponent {
  nuevoPersonaje: Personaje = { id: 0, nombre: '', apellido: '', edad: 0, fechaNacimiento: new Date() };
  isLoading: boolean = false;
  elementoId: string = '';


  constructor(
    private router: Router,
    private personajesService: PersonajesService,
    private loadingService: LoadingService
  ) {}

  agregarPersonaje() {
    this.isLoading = true;
    this.elementoId = 'nombre'

    const nuevoPersonajeCompleto: Personaje = {
      id: 0,
      nombre: this.nuevoPersonaje.nombre,
      apellido: this.nuevoPersonaje.apellido,
      edad: this.nuevoPersonaje.edad,
      fechaNacimiento: this.nuevoPersonaje.fechaNacimiento,
    };

    this.personajesService.addPersonaje(nuevoPersonajeCompleto).subscribe(
      () => {
        this.loadingService.hideLoading();
        this.router.navigate(['Listado']);
      },
      (error:any) => {
        console.error('Error al agregar personaje:', error);
        this.loadingService.hideLoading();
      }
    );
  }
}