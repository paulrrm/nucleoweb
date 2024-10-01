import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: any;
password: any;
accessToken:any
servicio = inject(LoginService)
  login(datos:any) {
    this.servicio.login(datos.value).subscribe(usr=>{
      console.log(usr)
      this.accessToken = usr.accessToken
      console.log(usr.accessToken)
      if(usr.accessToken != '') {
        localStorage.setItem('token','true')
      }
      else{
        localStorage.setItem('token','false')
      }
      // Redireccionar a la página principal cuando el login es exitoso
    })

  }
}
