import { IUsuario } from "./gestioUsuario";
import { IApartamento } from "./gestionEstructura";

export interface IAreaComun{
    id: string;
    descripcion: string;
    estado: IEstadoServicio;
    fechaHoraRegistro: string;
    capacidad: number;
}
export interface IDetalleAreaComunReserva extends IAreaComun {
  idReserva:string;
  fechaHoraInicio:string;
  fechaHoraFin:string;
  apartamento:IApartamento;
  usuario:IUsuario
}
export interface IEstadoServicio {
    id: string;
    descripcion: 'Activo' | 'Inactivo'| 'Reservado';
}
