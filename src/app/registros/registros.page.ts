import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Registro } from './registro.model';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  registros: Registro[] = [];

  constructor(private ServiceService: ServiceService) {}

  ngOnInit() {
    this.registros = this.ServiceService.getRegistros();
  }
  ionViewWillEnter() {
    this.registros = this.ServiceService.getRegistros();
  }
}
