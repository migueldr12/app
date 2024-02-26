import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-add',
  templateUrl: './registros-add.page.html',
  styleUrls: ['./registros-add.page.scss'],
})
export class RegistrosAddPage implements OnInit {
  constructor(
    private registroService: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {}
  saveNewRegistro(nombre: any, imagenURl: any) {
    this.registroService.addRegistro(nombre.value, imagenURl.value);
    this.router.navigate(['/registros']);
  }
}
