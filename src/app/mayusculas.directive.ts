import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: 'input[appMayusculas]',
  standalone: true
})
export class MayusculasDirective {
  constructor () {}
  @HostListener('input', ['$event'])
  onInput(event:any) {
    event.target.value = event.target.value.toUpperCase();
  }
}
