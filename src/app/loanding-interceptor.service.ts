import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Mostrar el indicador de carga antes de enviar la solicitud
    this.loadingService.showLoading();

    // Simular un retraso de 500 ms antes de continuar con la solicitud
    return timer(1000).pipe(
      switchMap(() => next.handle(req)),
      finalize(() => {
        // Ocultar el indicador de carga después de que se complete la solicitud (éxito o error)
        this.loadingService.hideLoading();
      })
    );
  }
}