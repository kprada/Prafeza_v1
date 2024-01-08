import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  url = window.location.href;
  conexion: string | null = null;
  form: FormGroup = this._fb.group({
    usuario: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
  });
  loadingLogin: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _route: Router) { }

  ngOnInit(): void {
  }
  ingresar() {
    this.loadingLogin = true;
   /*  this._auth
      .signIn(this.form.value.usuario!, this.form.value.pass!)
      .subscribe(
        (res: any) => {
          if (res) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('refresh', res.refresh);
            localStorage.setItem('usuario', JSON.stringify(res.usuario));
            this._route.navigate(['principal']);
            this.loadingLogin = false;
          } else {
            this.loadingLogin = false;
          }
        },
        (error: HttpErrorResponse) => {
          this.loadingLogin = false;
        }
      ); */
      setTimeout(() => {
      localStorage.setItem('token','kajsbhga86sdtasidasdasd234234');
      this.loadingLogin = false;
      this._route.navigate(['admin']);

      }, 2000);


  }

}
