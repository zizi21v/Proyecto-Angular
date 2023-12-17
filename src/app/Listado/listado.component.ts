import { Component, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { PersonajesService } from '../personajes.service';
import { Personaje } from '../personajes.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'App-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  standalone:true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
})
export class ListadoComponent implements OnInit {
  filtroNombre: string = '';
  personajesFiltrados: Personaje[] = [];
  isLoading: boolean = false;

  constructor(
    private personajesService: PersonajesService,

  ) {}

  ngOnInit() {
    this.filtrarPorNombre();
  }

  filtrarPorNombre() {
    this.isLoading = true;

    const filtro = this.filtroNombre.toLowerCase();
    const todosLosPersonajes = this.personajesService.getAllPersonajes();
    const personajesFiltrados = todosLosPersonajes.filter(
      (personaje) => `${personaje.nombre} ${personaje.apellido}`.toLowerCase().includes(filtro)
    );

    setTimeout(() => {
      this.personajesFiltrados = personajesFiltrados;
      this.isLoading = false;
    }, 500);
  }

}