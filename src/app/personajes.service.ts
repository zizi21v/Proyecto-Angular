import { Injectable } from '@angular/core';
import { Personaje } from './personajes.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private personajes: Personaje[] = []; 
  private nextId: number = 1;

  constructor() {
    this.loadPersonajes();
    
  }

  getAllPersonajes(): Personaje[] {
    return this.personajes;
  }

  getPersonajeById(id: number): any {
    return this.personajes.find(personaje => personaje.id === id);
  }

  getPersonajesByNombre(filtro: string): any[] {
    return this.personajes.filter(personaje =>
      personaje.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  }

  addPersonaje(personaje: Personaje): Observable<null> {
    personaje.id = this.nextId++;
    this.personajes.push(personaje);
    this.savePersonajes();
    return of(null);
  }
  private loadPersonajes(): void {
    const storedPersonajes = localStorage.getItem('personajes');
    this.personajes = storedPersonajes ? JSON.parse(storedPersonajes) : [];
    this.nextId = this.cNextId();
  }

  private savePersonajes(): void {
    localStorage.setItem('personajes', JSON.stringify(this.personajes));
    this.nextId = this.cNextId();
  }
  private cNextId(): number {
    return this.personajes.length > 0 ? Math.max(...this.personajes.map(p => p.id)) + 1 : 1;
  }
}