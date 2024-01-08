import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { IDetalleUsuario, IEstadoUsuario, ITipoDocumento, ITipoUsuario, IUsuario } from '../../../interfaces/gestioUsuario';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { apartamentos, estadoUsuario, tipoUsuario, tiposDocumento, torres } from '../../../constants/dataQuemada';
import { IApartamento, ITorre } from '../../../interfaces/gestionEstructura';

@Component({
  selector: 'app-crear-editar-usuario',
  templateUrl: './crear-editar-usuario.component.html',
  styleUrls: ['./crear-editar-usuario.component.css']
})
export class CrearEditarUsuarioComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  tiposDocumentos:ITipoDocumento[]=tiposDocumento;
  estadoUsuario:IEstadoUsuario[]=estadoUsuario;
  tipoUsuario:ITipoUsuario[]=tipoUsuario;
  torres:ITorre[]=torres;
  apartamentos:IApartamento[]=apartamentos;
  apartamentosFiltrados:IApartamento[]=[];
  constructor(private _fb:FormBuilder,
    public dialog: MatDialogRef<CrearEditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: IDetalleUsuario ) {
    console.log(data);
    this.initForm();
    if(data){
      this.setForm(data);
    }
  }

  ngOnInit(): void {
  }
  filtrarApartamentosPorTorre(idTorre:string){
    this.apartamentosFiltrados=apartamentos.filter(apartamento=>apartamento.TorreId==idTorre);
  }
  initForm(){
    this.form=this._fb.group({
              id:new FormControl(null),
              idTipoDocumento: new FormControl(null),
              nroDocumento: new FormControl(null),
              nombres:new FormControl(null),
              apellidos:new FormControl(null),
              idTipoUsuario:new FormControl(null),
              email:new FormControl(null),
              telefono1:new FormControl(null),
              telefono2:new FormControl(null),
              celular1:new FormControl(null),
              celular2:new FormControl(null),
              fechaHoraRegistro:new FormControl(null),
              idEstado:new FormControl(null),
              idTorre:new FormControl(null),
              idApartamento:new FormControl(null),
    });
  }
  setForm(data:IDetalleUsuario){
    this.filtrarApartamentosPorTorre(data.detalleApartamento.Torre.ID);

    this.form.setValue({
      id:data.id,
      idTipoDocumento: data.tipoDocumento.id,
      nroDocumento: data.nroDocumento,
      nombres:data.nombres,
      apellidos:data.apellidos,
      idTipoUsuario:data.tipoUsuario.id,
      email:data.email,
      telefono1:data.telefono1,
      telefono2:data.telefono2,
      celular1:data.celular1,
      celular2:data.celular2,
      fechaHoraRegistro:data.fechaHoraRegistro,
      idEstado:data.estado.id,
      idTorre:data.detalleApartamento.Torre.ID,
      idApartamento:data.detalleApartamento.ID,
    });
  }
  editarUsuario(){

  }
  crearUsuario(){

  }
  cancelar(){
    this.dialog.close(false);
  }

}
