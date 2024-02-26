import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Registro } from './registro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  registros: Registro[] = [];

  constructor(private ServiceService: ServiceService, private router: Router) {}

  ngOnInit() {
    this.registros = this.ServiceService.getRegistros();
  }
  ionViewWillEnter() {
    this.registros = this.ServiceService.getRegistros();
  }
  addNewRegistro() {
    this.router.navigate(['/new-registro']);
  }
}
