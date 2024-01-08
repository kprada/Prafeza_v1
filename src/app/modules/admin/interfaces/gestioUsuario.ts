import { IDetalleApartamento } from "./gestionEstructura";

export interface ITipoUsuario{
    id:string;
    descripcion:'Propietario' | 'Inquilino'  | 'Invitado';
}
export interface ITipoDocumento{
    id:string;
    descripcion:string;
    abr:string;
}
export interface IEstadoUsuario{
    id:string;
    descripcion:'Activo' | 'Inactivo';
}
export interface IEstadoVehiculo{
    id:string;
    descripcion:'Activo' | 'Inactivo';
}
export interface IEstadoMascota{
    id:string;
    descripcion:'Activo' | 'Inactivo';
}
export interface IVehiculo{
  id:string;
  placa:string;
  marca:string;
  modelo:string;
  color:string;
  estado:IEstadoVehiculo;
  fechaHoraRegistro:string;
  apartamentoId:string;
}
export interface IMascota{
  id:string;
  nombre:string;
  raza:string;
  color:string;
  estado:IEstadoMascota;
  fechaVacuna:string;
  fechaHoraRegistro:string;
  apartamentoId:string;
}
export interface IFamiliar{
    id:string;
    tipoDocumento:ITipoDocumento;
    nroDocumento:string;
    nombres:string;
    apellidos:string;
    parentezco:ITipoParentezco;
    apartamentoId:string;
    fechaHoraRegistro:string;
    estado:IEstadoUsuario;
}
export interface ITipoParentezco{
    id:string;
    descripcion:string;
}
export interface IUsuario{
    id:string;
    tipoDocumento:ITipoDocumento;
    nroDocumento:string;
    nombres:string;
    apellidos:string;
    tipoUsuario:ITipoUsuario;
    email:string;
    telefono1:string;
    telefono2:string;
    celular1:string;
    celular2:string;
    fechaHoraRegistro:string;
    estado:IEstadoUsuario;
}
export interface IDetalleUsuario extends IUsuario{
  detalleApartamento:IDetalleApartamento;
  detalleVehiculos:IVehiculo[];
  detalleMascotas:IMascota[];
  detalleFamiliares:IFamiliar[];
}
