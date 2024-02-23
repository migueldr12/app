import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private registros = [
    {
      id: '1',
      nombre: 'Miguel',
      foto: 'https://keystoneacademic-res.cloudinary.com/image/upload/element/16/160044_1205_CastleEX-33.jpg',
      observaciones: ['Trabajador del mes', 'No ve el fuchibol'],
    },
    {
      id: '2',
      nombre: 'Kevin',
      foto: 'https://preview.redd.it/por-si-usted-paso-por-mi-perfil-hola-tonoto-v0-1e9hmwdq5bac1.jpeg?auto=webp&s=5d4701a92270e7932f1e8825d10806db85653a8d',
      observaciones: ['Vale verga', 'Es tonoto'],
    },
    {
      id: '3',
      nombre: 'Andrea',
      foto: 'https://qtxasset.com/quartz/qcloud1/media/image/luxurytraveladvisor/1540483336/Grenoble%20France%20-%20Getty%20145-rev2.jpg?VersionId=OHrCelHaNC5RNLKArNpWaQjUD390fdHy',
      observaciones: ['Sabe frances', 'Zelda'],
    },
  ];

  constructor() {}

  getRegistros() {
    return [...this.registros];
  }

  //Muestra un solo registro
  getRegistro(registroId: string) {
    return {
      ...this.registros.find((registro) => registro.id === registroId),
    };
  }

  //Elimina registro
  deleteRegistro(id: string) {
    this.registros = this.registros.filter((registro) => registro.id !== id);
  }
}
