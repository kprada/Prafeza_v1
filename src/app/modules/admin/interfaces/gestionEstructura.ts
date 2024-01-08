export interface ITorre{
  ID:string;
  Descripcion:string;
  Estado:IEstadoEstructura;

}
export interface IApartamento{
  ID:string;
  TorreId:string;
  NroApartamento:string;
  Estado:IEstadoEstructura;
}
export interface IEstadoEstructura{
  ID:string;
  Descripcion:'Activo'|'Inactivo';
}
export interface IDetalleTorre extends ITorre{
  Apartamentos:IApartamento[];
}
export interface IDetalleApartamento extends IApartamento{
  Torre:ITorre;
}
