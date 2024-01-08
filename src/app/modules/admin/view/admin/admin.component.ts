import { Component, OnInit } from '@angular/core';
import { MenuAdmin } from '../../interfaces/MenuAdmin';
import { menuAdmin } from '../../constants/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menuAdmin:MenuAdmin[]=menuAdmin;
  constructor(private router:Router) {
    this.redireccion('/admin/usuarios');

  }

  ngOnInit(): void {
  }
  redireccion(path:string){
    this.router.navigate([path]);
  }

}
