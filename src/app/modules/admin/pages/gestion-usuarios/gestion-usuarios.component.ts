import { Component, OnInit } from '@angular/core';
import { IDetalleUsuario, IUsuario } from '../../interfaces/gestioUsuario';
import { usuarios } from '../../constants/dataQuemada';
import {MatDialog} from '@angular/material/dialog';
import { GestionAnexosComponent } from '../../components/modals/gestion-anexos/gestion-anexos.component';
import { CrearEditarUsuarioComponent } from '../../components/modals/crear-editar-usuario/crear-editar-usuario.component';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {
  usuarios:IDetalleUsuario[]=usuarios;
  mobileQuery: MediaQueryList;

  constructor(public dialog: MatDialog,media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 769px)');

   }
  data:Array<number>= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  ngOnInit(): void {
  }
  openDialogAnexos(data:IDetalleUsuario) {
    this.dialog.open(GestionAnexosComponent, {
      minWidth:'80%',
      position: {top: '10px'},
    data:data,
    });
  }
 openDialogCrearUsuario(data:IDetalleUsuario| null){
    this.dialog.open(CrearEditarUsuarioComponent, {
      minWidth:'60%',
      position: {top: '10%'},
    data:data,
    });
 }
}
