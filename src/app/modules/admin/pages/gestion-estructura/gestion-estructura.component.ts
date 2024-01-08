import { Component, OnInit } from '@angular/core';
import { IApartamento ,IDetalleTorre,ITorre} from 'src/app/modules/admin/interfaces/gestionEstructura';
import { apartamentos, torres } from 'src/app/modules/admin/constants/dataQuemada';
@Component({
  selector: 'app-gestion-estructura',
  templateUrl: './gestion-estructura.component.html',
  styleUrls: ['./gestion-estructura.component.css']
})
export class GestionEstructuraComponent implements OnInit {
  torres:ITorre[]=torres;
  apartamentos:IApartamento[]=apartamentos;
  detallesTorres:IDetalleTorre[]=this.torres.map(torre=>({...torre,Apartamentos:apartamentos.filter(apt=>apt.TorreId===torre.ID)}))
  torreSeleccionada:number | null=null;
  detalleTorre:IDetalleTorre| null=null;
  constructor() { }

  ngOnInit(): void {
  }
  verApto(torre:IDetalleTorre){
    this.detalleTorre=torre;
  }
}
