import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.page.html',
  styleUrls: ['./detalle-registro.page.scss'],
})
export class DetalleRegistroPage implements OnInit {
  registro: any = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private registrosService: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      let receiveId: string = String(paramMap.get('registroId'));
      this.registro = this.registrosService.getRegistro(receiveId);

      console.log(this.registro);
    });
  }
  deleteRegistro() {
    this.registrosService.deleteRegistro(this.registro.id);
    this.router.navigate(['registros']);
  }
}
