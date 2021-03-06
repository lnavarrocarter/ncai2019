import { environment } from '../../environments/environment.prod'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  ENV: any  = environment;
  constructor(private Http: HttpClient) { }
  
  async SendMail(form: any){
    let body = {
      html : `<h5>Te ha llegado una pregunta desde la web.</h5>
      <p> Nombre :${form.name} <br> 
      Email :${form.email} <br> 
      Mensaje: <br> ${form.message}</p>`,
      subjet : `${form.name} te ha enviado una consulta desde la web...`,
      email: form.email
    };
    return await this.Http.post(`${this.ENV.APIPATH}api/email/send`, body);
  }
}
