import { Component, OnInit } from '@angular/core';
import { FotosService } from './fotos.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  fotos: any = [];

  constructor(private fotosService: FotosService) {}

  ngOnInit() {
    this.fotosService.getFotos().subscribe((data) => (this.fotos = data));
  }
}
