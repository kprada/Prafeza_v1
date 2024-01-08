export interface MenuAdmin {
  name: string;
  path: string;
  img: string;
  children?: MenuAdmin[];
}
