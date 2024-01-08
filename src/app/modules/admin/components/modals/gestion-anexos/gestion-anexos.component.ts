import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IDetalleUsuario, IEstadoMascota, IEstadoVehiculo, IFamiliar, IMascota, ITipoDocumento, ITipoParentezco, IUsuario, IVehiculo } from '../../../interfaces/gestioUsuario';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { estadoMascota, estadoVehiculo, tiposDocumento, tiposParentezco } from '../../../constants/dataQuemada';

@Component({
  selector: 'app-gestion-anexos',
  templateUrl: './gestion-anexos.component.html',
  styleUrls: ['./gestion-anexos.component.css']
})
export class GestionAnexosComponent implements OnInit {
  panels = [
    {
      active: false,
      name: 'Registrar Vehiculo',
      disabled: false
    }
  ];
  formVehiculo:FormGroup=new FormGroup({});
  formMascota:FormGroup=new FormGroup({});
  formFamiliar:FormGroup=new FormGroup({});
  activePanelVehiculo:boolean=false;
  activePanelMascota:boolean=false;
  activePanelFamiliar:boolean=false;
  estadoVehiculo:IEstadoVehiculo[]=estadoVehiculo;
  estadoMascota:IEstadoMascota[]=estadoMascota;
  tipoDocumento:ITipoDocumento[]=tiposDocumento;
  tiposParentezco:ITipoParentezco[]=tiposParentezco;
  constructor(@Inject(MAT_DIALOG_DATA) public data: IDetalleUsuario,private _fb:FormBuilder) {
    console.log(data);
    this.initFormVehiculo();
    this.initFormMascota();
    this.initFormFamiliar();

  }

  ngOnInit(): void {
  }
  initFormVehiculo(){
    this.formVehiculo=this._fb.group({
      id:new FormControl(null),
      placa: new FormControl(null),
      marca: new FormControl(null),
      modelo:new FormControl(null),
      color:new FormControl(null),
      estadoId:new FormControl(1),
      fechaHoraRegistro:new FormControl(null),
      apartamentoId:new FormControl(null),
    });
  };
  initFormMascota(){
    this.formMascota=this._fb.group({
      id:new FormControl(null),
      nombre: new FormControl(null),
      raza: new FormControl(null),
      color:new FormControl(null),
      estadoId:new FormControl(null),
      fechaVacuna:new FormControl(null),
      fechaHoraRegistro:new FormControl(null),
      apartamentoId:new FormControl(null),
    });
  };
  initFormFamiliar(){
    this.formFamiliar=this._fb.group({
      id:new FormControl(null),
      tipoDocumentoId: new FormControl(null),
      nroDocumento: new FormControl(null),
      nombres: new FormControl(null),
      apellidos: new FormControl(null),
      parentescoId:new FormControl(null),
      fechaHoraRegistro:new FormControl(null),
      apartamentoId:new FormControl(null),
    });
  };
  setFormVehiculo(data:IVehiculo){
    this.activePanelVehiculo=true;
    this.formVehiculo.setValue({
      id:data.id,
      placa: data.placa,
      marca: data.marca,
      modelo:data.modelo,
      color:data.color,
      estadoId:data.estado.id,
      fechaHoraRegistro:data.fechaHoraRegistro,
      apartamentoId:data.apartamentoId,
    });
  }
  setFormMascota(data:IMascota){
    this.activePanelMascota=true;
    this.formMascota.setValue({
      id:data.id,
      nombre: data.nombre,
      raza: data.raza,
      color:data.color,
      estadoId:data.estado.id,
      fechaVacuna:data.fechaVacuna,
      fechaHoraRegistro:data.fechaHoraRegistro,
      apartamentoId:data.apartamentoId,
    });
  }
  setFormFamiliar(data:IFamiliar){
    this.activePanelFamiliar=true;
    this.formFamiliar.setValue({
      id:data.id,
      tipoDocumentoId: data.tipoDocumento.id,
      nroDocumento: data.nroDocumento,
      nombres: data.nombres,
      apellidos: data.apellidos,
      parentescoId:data.parentezco.id,
      fechaHoraRegistro:data.fechaHoraRegistro,
      apartamentoId:data.apartamentoId
    });
  }
}
