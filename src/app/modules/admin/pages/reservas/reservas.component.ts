import { Component, OnInit } from '@angular/core';
import { IAreaComun } from '../../interfaces/gestionReservas';
import { areasComunes } from '../../constants/dataQuemada';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  areasComunes:IAreaComun[]=areasComunes;
  areaComunId:string='1';
  constructor() { }

  ngOnInit(): void {
  }

}
